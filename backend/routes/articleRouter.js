import express from "express";
const articleRouter = express.Router();

articleRouter.get("/fetch", (req, res) => {
  res.send("Successfully fetched all the articles");
});

articleRouter.get("/fetch/:id", (req, res) => {
  res.send("Successfully fetched user articles");
});

articleRouter.post("/upload", (req, res) => {
  res.send("Upload successfull");
});

export default articleRouter;
