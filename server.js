import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogroute.js";

// Create an express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/blogs", blogRoutes);

// Define the PORT from environment variables
const PORT = process.env.PORT;

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
