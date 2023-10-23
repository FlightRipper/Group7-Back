import express from 'express';
import dotenv from 'dotenv';
import ProductsRoute from '/home/mehio/Desktop/Group7-Back/routes/products.js';
import mongoose from 'mongoose';


// Express App
const app = express();

// .env
dotenv.config()

//Mongoose
const db = mongoose

// Middleware
app.use(express.json())
app.use((req,res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/products',ProductsRoute)

//Connect to db
mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    app.listen(process.env.PORT, ()=>{
      console.log('Connected to db & listening on port', process.env.PORT)
    })
})

.catch((error)=> {
    console.log(error)
})

//Listening for requests
