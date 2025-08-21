import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  adminId: {
    type: String,
    required: true,
  },
  adminEmail: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

export { Admin };
