import blog from "../model/blogModel.js";
import mongoose from "mongoose";

// get a single blog
const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Blog not found" });
    }
    const singleBlog = await blog.findById(id);

    if (!singleBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(singleBlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the requested blog" });
  }
};

// get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
};

// create a new blog
const createBlog = async (req, res) => {
  const { title, author, content, date, image } = req.body;

  //add blog to db
  try {
    const newBlog = new blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ error: "Failed to create a new blog post" });
  }
};

//update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Failed to update" });
    }
    // Update the blog post
    const updatedBlog = await blog.findOneAndUpdate(
      { _id: id },
      {
        ...req.body, // Update object based on what the user entered
      }
    );

    if (!updatedBlog) {
      return res.status(400).json({ error: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the blog post" });
  }
};

//delete a blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(204).send(); // the server successfully processed the client's request, and that the server is not returning any content.
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the blog post" });
  }
};

export { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
