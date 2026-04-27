import product from "../models/productModel.js";

class ProductsController {
  static async getProducts(req, res, next) {
    try {
      const foundProducts = await product.find({});
      res.status(200).send(foundProducts);
    } catch (error) {
      next(error);
    }
  }

  static async postProduct(req, res, next) {
    try {
      const createdProduct = await product.create(req.body);
      res.status(200).send(createdProduct);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req, res, next) {
    try {
      const updatedProduct = await product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
      );
      res.status(200).send(updatedProduct);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const deletedProduct = await product.findByIdAndDelete(req.params.id);
      res.status(200).send(deletedProduct);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
