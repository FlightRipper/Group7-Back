import mongoose from "mongoose";

const db = mongoose

const Schema = mongoose.Schema

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: String,
    }
},
{
    timestamps: true
});

const descriptionSchema = new Schema({

    name: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    display: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    camera: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    dimensions: {
        type: Number,
        required: true
    },

    weight: {
        type: Number,
        required: true
    },

    technology: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    gpu: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    storage: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    networking: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    battery: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    os: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    cpu: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    chipset: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    internal: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    timestamps: true
});

const categoriesSchema = new Schema({

    name: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    image: {
        type: String,
        required: true
    }
});

const blogsSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
    },

    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },

    date: {
        type: Date,
    },

    image: {
        type: String
    }
});

const adminSchema = new Schema ({

    name: {
        type: String,
        required: true
    },

    password: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
})


const productsModel = model('Product', productsSchema);
const descriptionModel = model('Description', descriptionSchema);

export {productsModel, descriptionModel, categoriesSchema,blogsSchema,adminSchema};