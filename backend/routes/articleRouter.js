import express from "express";
import { Article } from "../models/articleModel";
const articleRouter = express.Router();

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

articleRouter.post("/upload", async (req, res) => {
  try {
    // Expect req.body to contain at least title, userId, tags
    const { title, userId, tags } = req.body;

    let cloudStorageUrl = "testurl";

    if (!title || !userId || !cloudStorageUrl) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newArticle = new Article({
      title: title.trim(),
      userId,
      cloudStorageUrl,
      tags: tags ? tags.map((tag) => tag.trim().toLowerCase()) : [],
    });

    await newArticle.save();

    res.status(201).json({ message: "Upload successful", article: newArticle });
  } catch (error) {
    res.status(500).json({ message: "Error uploading article", error });
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
