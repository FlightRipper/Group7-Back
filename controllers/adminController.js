import AdminModel from '../models/adminModel.js';

//GET all
const getAdmin = async (req, res) => {

const admins = await AdminModel.find({}).sort({createAt: -1})

res.status(200).json(admins)

}

//POST one admin (authenticate)
const postOneAdmin = async (req, res) => {
    const {username, password} = req.body

    try {
        // Query the database to find an admin with the provided username and password
        const admin = await AdminModel.findOne({ username, password});

        if (admin) {
            // Admin with the provided username and password found
            res.status(200).json({ message: 'Admin access granted' });
        } else {
            // No admin with matching credentials found
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        // Handle any database query errors here
        res.status(500).json({ error: 'Internal server error' });
    }
};


//POST
const createAdmin = async (req, res) => {
    const {username, password} = req.body
    
    try {
        console.log("file",req.files)
        const image = req.files.map(each => each.path)
console.log(image)      
        const admin = await AdminModel.create({username,password,image})
        res.status(200).json(admin)
    }
    catch (error) {
    res.status(400).json({error:error.message})
    }
};

//DELETE
const deleteAdmin = async (req, res) => {
    const {username,password,image} = req.body
    try{
const toBeDeleted = await AdminModel.findOneAndDelete({ username, password,image });

if (toBeDeleted) {

    res.status(200).json({ message: 'Admin deleted successfully' });
} else {

    res.status(401).json({ error: 'wrong username and/or password' });
} }
 catch (error) {

res.status(500).json({ error: 'Internal server error' });
}
}


export {createAdmin,getAdmin,postOneAdmin,deleteAdmin}