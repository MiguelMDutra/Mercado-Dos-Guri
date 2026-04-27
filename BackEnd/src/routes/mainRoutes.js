import express from "express";
import products from "./productsRoutes.js";
import user from "./userRoutes.js";

function routes(app) {
  app.use(express.json());
  app.use(products);
  app.use(user);
}

export default routes;
