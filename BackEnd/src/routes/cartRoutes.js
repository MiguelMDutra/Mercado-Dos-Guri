import express from "express";
import CartController from "../controller/cartController.js";

const cartRouter = express.Router();

cartRouter.get("/cart", CartController.getCart);
cartRouter.post("/cart/item", CartController.addToCart);
cartRouter.put("/cart/item/:id", CartController.addToCart);
cartRouter.delete("/cart/item/:id", CartController.removeFromCart);

export default cartRouter;
