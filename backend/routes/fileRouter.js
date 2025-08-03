import express from "express";
const fileRouter = express.Router();

fileRouter.get("/fetch", (req, res) => {
  res.send("Successfully fetched all the files");
});

fileRouter.post("/upload", (req, res) => {
  res.send("Upload successfull");
});

export default fileRouter;
