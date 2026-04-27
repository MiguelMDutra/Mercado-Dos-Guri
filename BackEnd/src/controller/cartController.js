import product from "../models/productModel.js";
import cart from "..models/cartModel.js"

class CartController {
    static async getCart(req, res, next){
        const cartId = req.body.cartId;
        try {
            const userCart = await cart.findById(cartId);
            res.status(200).send(userCart);
        } 
        catch (error) {
            next(error);
        }
    }

    static async addToCart(req, res, next) {
        const cartId = req.body.cartId;
        const productId = req.body.productId;
        const userCart = await cart.findById(cartId);

        try {
            const product = await product.findById(productId);
        } catch (error) {
            next(error);
        }

        const existingItem = userCart.items.find(item => item.productId === productId);

        if (existingItem) {
            existingItem.quantity ++;
        } else {
            userCart.items.push({productId: productId, quantity:1});
        }

        await userCart.save();
        return userCart;
    }



    static async removeFromCart(req, res, next) {
        const cartId = req.body.cartId;
        const productId = req.body.productId;
        const userCart = await cart.findById(cartId);
        userCart.items = userCart.items.filter( item => item._id.toString() !== productId );

        await userCart.save();
        return userCart;
    }
}

export default CartController;
