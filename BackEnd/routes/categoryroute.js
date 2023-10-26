import express from "express";
const router = express.Router();
import { createCategory, getCategory, getCategories, deleteCategory, updateCategory } from '../controllers/categroyController.js'

router.get('/', getCategories)

router.get('/:id', getCategory)

router.post('/', createCategory)

router.delete('/:id', deleteCategory)

router.patch('/:id', updateCategory)

module.exports = router