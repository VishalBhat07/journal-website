import express from "express";
import { Article } from "../models/articleModel.js";
const articleRouter = express.Router();
import multer from "multer";
import { Storage } from "megajs";

const upload = multer();

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

    if (!req.file) {
      return res.status(400).json({ message: "Article file is required" });
    }

    // Authenticate with MEGA
    const storage = await new Storage({
      email: process.env.MEGA_EMAIL,
      password: process.env.MEGA_PASS,
    }).ready;

    // Upload to MEGA (use in-memory buffer from multer)
    const uploadedFile = await storage.upload(
      req.file.originalname,
      req.file.buffer
    ).complete;

    // Generate public link
    const cloudStorageUrl = await uploadedFile.link();

    // Validate required fields
    if (!title || !userId || !cloudStorageUrl || !authors) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Parse authors JSON
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

    // Create and save article with MEGA link
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

    res.status(201).json({
      message: "Upload successful",
      article: newArticle,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      message: "Error uploading article",
      error: error.message,
    });
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
