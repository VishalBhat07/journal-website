import express from "express";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";

import articleRouter from "./routes/articleRouter.js";
import archiveRouter from "./routes/archiveRouter.js";
import adminRouter from "./routes/adminRouter.js";

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

app.use("/api/article", articleRouter);
app.use("/api/archive", archiveRouter);
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
