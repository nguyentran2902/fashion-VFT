const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    image: Array,
    price: {
        type: Number,
        required: true,
    },
    sale: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    storage: [{
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true,
        },
        quality: {
            type: Number,
            required: true
        }
    }]
})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;