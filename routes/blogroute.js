import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

// router object
const router = express.Router();

//get single blog
router.get("/:id", getBlogById);

// get all blogs
router.get("/", getAllBlogs);

// post a new blog
router.post("/", createBlog);

//update a blog
router.patch("/:id", updateBlog);

// delete a workout
router.delete("/:id", deleteBlog);

export default router;
