import express from "express";
import fileRouter from "./routes/fileRouter.js";
import archiveRouter from "./routes/archiveRouter.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
import cors from "cors";
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

app.use("/api/files", fileRouter);
app.use("/api/archive", archiveRouter);

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
