import mongoose from "mongoose";
import user from "./users.js";

const cartItemSchema = new mongoose.Schema({
  product: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true },
  quantity: { 
    type: Number,
    required: true,
    min: 1 }
});

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },

    items: [cartItemSchema]
})

const Cart = mongoose.model("Cart", cartSchema, "cart");

export default Cart;
