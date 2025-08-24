import express from "express";
import { Article } from "../models/articleModel.js";
const articleRouter = express.Router();
import multer from "multer";
import { Storage } from "megajs";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // make sure this directory exists or create it
  },
  filename: (req, file, cb) => {
    // Unique filename with timestamp + original extension
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

articleRouter.get("/fetch", async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error });
  }
});

articleRouter.get("/fetch/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const userArticles = await Article.find({ userId });
    res.status(200).json(userArticles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user articles", error });
  }
});

articleRouter.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title, userId, tags, authors } = req.body;

    console.log(req.file);
    // multer puts the uploaded file info in req.file
    if (!req.file) {
      return res.status(400).json({ message: "Article file is required" });
    }

    // Initialize MEGA storage client
    const storage = await new Storage({
      email: process.env.MEGA_EMAIL,
      password: process.env.MEGA_PASS,
    }).ready;

    // Read file buffer from multer saved file on disk
    const fileBuffer = fs.readFileSync(req.file.path);

    // Upload file to MEGA root folder
    const megaFile = storage.upload({
      name: req.file.originalname,
      size: req.file.size,
    });

    // Pipe buffer to mega upload stream
    megaFile.write(fileBuffer);
    megaFile.end();

    // Wait for upload complete
    await new Promise((resolve, reject) => {
      megaFile.on("complete", resolve);
      megaFile.on("error", reject);
    });

    console.log("Hello");
    // Get the URL of uploaded file
    const cloudStorageUrl = await megaFile.link(); // Public MEGA link

    // Validate required fields including authors array with at least one author
    if (!title || !userId || !cloudStorageUrl || !authors) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    console.log("Cloud:", cloudStorageUrl);
    // authors come as JSON string usually, parse it
    let parsedAuthors;
    try {
      parsedAuthors =
        typeof authors === "string" ? JSON.parse(authors) : authors;
    } catch {
      return res.status(400).json({ message: "Invalid authors format" });
    }

    if (!Array.isArray(parsedAuthors) || parsedAuthors.length === 0) {
      return res
        .status(400)
        .json({ message: "Authors must be a non-empty array" });
    }

    const newArticle = new Article({
      title: title.trim(),
      userId,
      cloudStorageUrl,
      tags: tags
        ? typeof tags === "string"
          ? tags.split(",").map((tag) => tag.trim().toLowerCase())
          : tags.map((tag) => tag.trim().toLowerCase())
        : [],
      authors: parsedAuthors.map((author) => ({
        name: author.name.trim(),
        email: author.email.trim().toLowerCase(),
        phone: author.phone.trim(),
        ORCID: author.ORCID ? author.ORCID.trim() : undefined,
      })),
    });

    await newArticle.save();

    res.status(201).json({ message: "Upload successful", article: newArticle });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading article", error: error.message });
  }
});

articleRouter.post("/update/:articleId", async (req, res) => {
  const { articleId } = req.params;
  const { articleStatus } = req.body;

  // 1. pending -> default
  // 2. approved -> to be disaplyed on APPROVED ARTICLES PAGE
  // 3. rejected -> delete from cloud, save only metadata

  try {
    // Find article by ID
    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    // Check current status and update only if it is "pending"
    if (article.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Article status is not pending, cannot update" });
    }

    if (articleStatus === "approved") {
      article.status = "approved";
    } else {
      article.cloudStorageUrl = "";
      // delete article from firebase
      article.status = "rejected";
    }

    await article.save();
    res.status(200).json({ message: "Status updated to approved", article });

    // Update updatedAt timestamp automatically due to mongoose timestamps option
  } catch (error) {
    res.status(500).json({ message: "Error updating article status", error });
  }
});

export default articleRouter;
