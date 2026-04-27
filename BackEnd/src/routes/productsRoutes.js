import express from "express";
import ProductsController from "../controller/productsController.js";

const productsRouter = express.Router();

productsRouter.get("/products", ProductsController.getProducts);
productsRouter.post("/products", ProductsController.postProduct);
productsRouter.put("/products/:id", ProductsController.updateProduct);
productsRouter.delete("/products/:id", ProductsController.deleteProduct);

export default productsRouter;
