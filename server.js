import express from 'express';
import dotenv from 'dotenv';
import AdminRoute from './routes/admin.js';
import mongoose from 'mongoose';

// Express App
const app = express();

// .env
dotenv.config()

// Middleware
app.use(express.json())
app.use((req,res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes
app.use('/api/admin',AdminRoute)

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
