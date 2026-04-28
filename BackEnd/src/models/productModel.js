import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "o campo de nome é necessário"],
  },
  price: {
    type: Number,
    required: [true, "o campo de preço é necessário"],
  },
  productImage: {
    type: String,
    required: [true, "o campo de foto do produto é necessário"],
  },
  description: {
    type: String,
    required: [true, "o campo de descricao é necessário"],
  },
  category: {
    type: String,
    required: [true, "o campo de categoria é necessário"],
  },
  rating: { type: Number, default: 0 },
  numberOfRatings: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
});

const Product = mongoose.model("Product", productSchema, "product");

export default Product;
