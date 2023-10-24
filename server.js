import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
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

//routes
app.use("/blogs", blogRoutes);

// Define the PORT from environment variables
const PORT = process.env.PORT;

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.cyan);
});
