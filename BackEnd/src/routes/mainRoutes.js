import express from "express";
import products from "./productsRoutes.js";
import user from "./userRoutes.js";
import cart from "./cartRoutes.js"
import cartItem from "./cartRoutes.js"

function routes(app) {
  app.use(express.json());
  app.use(products);
  app.use(user);
  app.use(cart);
  app.use(cartItem);
}

export default routes;
