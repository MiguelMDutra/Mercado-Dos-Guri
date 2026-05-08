import express from "express";
import CartController from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/cart/:userId", CartController.getCart);
cartRouter.post("/cart", CartController.createCart);

cartRouter.post("/cart/add", CartController.addToCart);
cartRouter.delete("/cart/remove", CartController.removeFromCart);

export default cartRouter;
