import express from "express";
import upload from "../config/multerConfig.js";
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
router.post("/", upload.array("image", 3), createBlog);

//update a blog
router.patch("/:id", upload.array("image", 3), updateBlog);

// delete a workout
router.delete("/:id", deleteBlog);

export default router;
