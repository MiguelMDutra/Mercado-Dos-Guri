import product from "../models/productModel.js";
import cart from "../models/cartModel.js"

class CartController {
    static async createCart(req, res, next){
        const userId = req.body.userId;
        try {
            const newCart = await cart.create({ user: userId, items: [] });
            res.status(201).send(newCart);
        } 
        catch (error) {
            next(error);
        }
    }
    static async getCart(req, res, next){
        const userId = req.body.userId;
        try {
            const userCart = await cart.findOne({user: userId}).populate();
            res.status(200).send(userCart);
        } 
        catch (error) {
            next(error);
        }
    }

    static async addToCart(req, res, next) {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const userCart = await cart.findOne({user: userId});

        try {
            const addProduct = await product.findById(productId);
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
        const userId = req.body.userId;
        const productId = req.body.productId;
        const userCart = await cart.findById(userId);
        userCart.items = userCart.items.filter( item => item._id.toString() !== productId );

        await userCart.save();
        return userCart;
    }
}

export default CartController;
