import express from "express";
import cors from "cors";

import productRoutes from "./routes/productRoutes.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ZWears API is running",
  });
});

// Product routes
app.use("/api/products", productRoutes);

export default app;