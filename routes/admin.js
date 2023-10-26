import express from 'express';
import {createAdmin,getAdmin,postOneAdmin,deleteAdmin} from '../controllers/adminController.js'

const router = express.Router();

// GET all 
router.get('/', getAdmin)


//POST
router.post('/',createAdmin)

//POST ONE
router.post('/signin',postOneAdmin)

//DELETE one
router.delete('/delete', deleteAdmin)


export default router;