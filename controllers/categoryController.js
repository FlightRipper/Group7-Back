import Category from "../models/categoryModel.js";
import mongoose from "mongoose";

//Get all
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching categories" });
  }
};

//get Single
export const getCategoryById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const category = await Category.findById({ _id: id });
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error fetching category" });
  }
};

//Create new
export const createCategory = async (req, res) => {
  const { categoryName, categoryImage } = req.body;

  try {
    const newCategory = new Category({
      categoryName,
      categoryImage,
    });

    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: "Error creating the Category" });
  }
};

//delete Single
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }

  try {
    const deletedCategory = await Category.findByIdAndDelete({ _id: id });
    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the Category" });
  }
};

//update
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { categoryName, categoryImage } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not valid id" });
  }
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, {
      categoryName,
      categoryImage,
    });

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Error updating the Category" });
  }
};
