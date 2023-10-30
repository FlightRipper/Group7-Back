import mongoose from "mongoose";

const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: [{
        type: String,
        required: true
    }]

},
{
    timestamps: true
});

const adminModel = mongoose.model('Admin', adminSchema);

export default adminModel;

// const descriptionSchema = new Schema({

//     name: {
//         type: String,
//         required: true
//     },

//     display: {
//         type: String,
//         required: true
//     },

//     camera: {
//         type: String,
//         required: true
//     },

//     dimensions: {
//         type: Number,
//         required: true
//     },

//     weight: {
//         type: Number,
//         required: true
//     },

//     technology: {
//         type: String,
//         required: true
//     },

//     gpu: {
//         type: String,
//         required: true
//     },

//     storage: {
//         type: String,
//         required: true
//     },

//     networking: {
//         type: String,
//         required: true
//     },

//     battery: {
//         type: String,
//         required: true
//     },

//     os: {
//         type: String,
//         required: true
//     },

//     cpu: {
//         type: String,
//         required: true
//     },

//     chipset: {
//         type: String,
//         required: true
//     },

//     internal: {
//         type: String,
//         required: true
//     },
//     timestamps: true
// });

// const categoriesSchema = new Schema({

//     name: {
//         type: String,
//         required: true
//     },

//     image: {
//         type: String,
//         required: true
//     }
// });

// const blogsSchema = new Schema({

//     title: {
//         type: String,
//         required: true
//     },

//     author: {
//         type: String,
//     },

//     content: {
//         type: String,
//         required: true
//     },

//     date: {
//         type: String,
//     },

//     image: {
//         type: String
//     }
// });

// const adminSchema = new Schema ({

//     name: {
//         type: String,
//         required: true
//     },

//     password: {
//         type: String,
//         required: true
//     }
// })


