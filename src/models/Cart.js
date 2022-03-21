import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    product: [{
        _id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        },
        size: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        }
    }]
})

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;