import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import connectDB from "./config/db.js";
import categoryroute from "./routes/categoryroute.js";
// import { getCategory, createCategory, deleteCategory , updateCategory } from "../controllers/categoryController.js";

// // Create an express app
const app = express();

// // Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
// app.get("/", (req, res) => {
//   res.send("<h1>TechSpot</h1>");
// });

app.use('/categoryroute', categoryroute)
// // Include the blog route
// app.post("/blog/create", blogroute);
// app.patch("/blog/update", blogroute);

// // Define the PORT from environment variables
const PORT = process.env.PORT;

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.black);
});