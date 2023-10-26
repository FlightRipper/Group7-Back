import express from 'express';
import AdminModel from '../models/adminModel.js';

const router = express.Router();

// GET all 
router.get('/', (req, res) => {
    res.json({msg: 'GET all'})
})


//POST
router.post('/', async (req, res) => {
    const {username, password} = req.body

    try {
        const admin = await AdminModel.create({username,password})
        res.status(200).json(admin)
    }
    catch (error) {
    res.status(400).json({error:error.message})
    }
    res.json({msg:'POST'})
})

//DELETE one
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE by id'})
})

//UPDATE one
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE by id'})
})
export default router;