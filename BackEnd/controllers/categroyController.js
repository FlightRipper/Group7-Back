import Category from '../model/categorymodel.js';
import mongoose from 'mongoose';

const createCategory = async (req, res) => {
    const { name, image } = req.body;
    try {
        const category = await Category.create({ name, image }); // Assuming you have a create method in your model
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).sort({ createdAt: -1 });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategory = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId>isValidObjectId(id)) {
        return res.status(404).json({error: "No such Catgeory"})
    }
    try {
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ error: 'No such category' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategory = async(req , res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId>isValidObjectId(id)) {
        return res.status(404).json({error: "No such Catgeory"})
    }
    const category = await Category.findOneAndDelete({_id: id})
    if (!category){
        return res.status(400).json({error: 'No such category'});
    }
    res.status(200).json(category)
}

const updateCategory = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId>isValidObjectId(id)) {
        return res.status(404).json({error: "No such Catgeory"})
    }
    const category = await Category.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!category){
        return res.status(400).json({error: 'No such category'});
    }
    res.status(200).json(category)
}

export { getCategory, createCategory, getCategories, deleteCategory, updateCategory };
