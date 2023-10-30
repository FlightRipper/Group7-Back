import { ClientSession } from "mongodb";
import blogModel from "../model/blogModel.js";
import mongoose from "mongoose";

// get a single blog
const getBlogById = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Blog not found" });
    }
    const singleBlog = await blogModel.findById(id);

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
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
};

//create a new blog
const createBlog = async (req, res) => {
  const { title, author, content, date } = req.body;
  const images = req.files; // Use req.files for an array of image files

  try {
    // Check if no image files were uploaded
    const usedDefaultImage = !images || images.length === 0;

    // Create the new blog post
    const imagePaths = usedDefaultImage
      ? ["/images/no-image.jpg"]
      : images.map((each) => each.path);

    const newBlog = await blogModel.create({
      title,
      author,
      content,
      date,
      images: imagePaths, // Store an array of image paths
    });

    // Provide a note in the response if the default image was used
    if (usedDefaultImage) {
      res.status(200).json({
        message: "Blog created with the default image",
        blog: newBlog,
      });
    } else {
      res.status(200).json(newBlog);
    }
  } catch (error) {
    res.status(400).json({ error: "Failed to create a new blog post" });
  }
};

// update a blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, author, content, date } = req.body;
  const images = req.files; // Corrected to access uploaded files

  try {
    // Check if no image files were uploaded
    const usedDefaultImage = !images || images.length === 0;

    const imagePaths = usedDefaultImage
      ? ["/images/no-image.jpg"]
      : images.map((each) => each.path);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Blog Not found" });
    }

    const updatedBlog = await blogModel.findByIdAndUpdate(
      id,
      {
        title,
        author,
        content,
        date,
        images: imagePaths, // Update the images property
      },
      { new: true } // Add this option to get the updated document as the result
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
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
    const deletedBlog = await blogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(204).send(); // the server successfully processed the client's request, and that the server is not returning any content.
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the blog post" });
  }
};

export { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
