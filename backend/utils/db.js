import mongoose from "mongoose";

async function connectDB() {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connect successfully");
  });
}

export default connectDB;
