import { verifyToken } from "./middleware/authMiddleware.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import pool from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
// Test Route
app.get("/", (req, res) => {
  res.send(" PrepMate Backend is Running");
});


pool
  .query("SELECT NOW()")
  .then(() => {
    console.log("✅ PostgreSQL Connected");
  })
  .catch((err) => {
    console.log("❌ Database Error:", err.message);
  });
app.get("/api/dashboard", verifyToken, (req, res) => {
  res.json({
    message: "Welcome to PrepMate Dashboard!",
    user: req.user,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

