import express from "express";
import ProductsController from "../controller/productsController.js";
import productNameValidation from "../validators/products/productsName.js";
import productUrlValidation from "../validators/products/productsUrl.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const productsRouter = express.Router();

productsRouter.get("/products" ,ProductsController.getProducts);
productsRouter.post("/products", productNameValidation, productUrlValidation, ProductsController.postProduct);
productsRouter.put("/products/:id", productNameValidation, productUrlValidation, ProductsController.updateProduct);
productsRouter.delete("/products/:id", ProductsController.deleteProduct);

export default productsRouter;
