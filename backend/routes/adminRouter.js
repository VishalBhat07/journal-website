import express from "express";
import { Admin } from "../models/adminModel.js";

const adminRouter = express.Router();

adminRouter.get("/check/:adminId", async (req, res) => {
  try {
    const { adminId } = req.params;

    const isAdmin = await Admin.findOne({ adminId });

    if (isAdmin != null) {
      res.status(200).json({
        isAdmin: true,
        adminId: isAdmin.adminId,
        adminEmail: isAdmin.adminEmail,
      });
    } else {
      res.status(200).json({
        isAdmin: false,
      });
    }
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch archives",
      message: error.message,
    });
  }
});

adminRouter.post("/add", async (req, res) => {
  const { adminId, adminEmail } = req.body;
  try {
    const newAdmin = new Admin({ adminId, adminEmail });
    const savedAdmin = await newAdmin.save();
    res.send("Admin added successfully");
  } catch (error) {
    res.send(`Error adding admin: ${error.message}`);
  }
});

export default adminRouter;
