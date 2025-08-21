import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";

import articleRouter from "./routes/articleRouter.js";
import archiveRouter from "./routes/archiveRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/files", articleRouter);
app.use("/api/archive", archiveRouter);

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
