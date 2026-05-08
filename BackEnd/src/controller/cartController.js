import { cart } from "../models/cartModel.js"
import { cartItem } from "../models/cartModel.js"

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
        const userId = req.params.userId;
        try {
            const userCart = await cart.findOne({user: userId}).populate();
            res.status(200).send(userCart || { items: [] });
        } 
        catch (error) {
            next(error);
        }
    }

    static async addToCart(req, res, next) {
        const userId = req.body.userId;
        const productId = req.body.productId;
        const qty = parseInt(req.body.qty || '1', 10);

        if (!userId || !productId) {
            return next(new Error('userId e productId são obrigatórios'));
        }

        let userCart = await cart.findOne({user: userId});
        if (!userCart) {
            userCart = await cart.create({ user: userId, items: [] });
        }

        const existingItem = userCart.items.find(item => item.product.toString() === productId);

        if (existingItem) {
            existingItem.quantity += qty;
        } else {
            const addItem = await cartItem.create({ product: productId, quantity: qty });
            userCart.items.push(addItem);
        }

        await userCart.save();
        res.status(201).send(userCart);
    }

    static async removeFromCart(req, res, next) {
        const userId = req.body.userId;
        const productId = req.body.productId;

        if (!userId || !productId) {
            return next(new Error('userId e productId são obrigatórios'));
        }

        const userCart = await cart.findOne({ user: userId });
        if (!userCart) {
            return next(new Error('Carrinho não encontrado'));
        }

        userCart.items = userCart.items.filter(item => item._id.toString() !== productId);

        await userCart.save();
        res.status(200).send(userCart);
    }
}

export default CartController;

