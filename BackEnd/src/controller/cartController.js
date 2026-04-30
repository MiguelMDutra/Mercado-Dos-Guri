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
        console.log("pq q ta dando timeout")
        const userId = req.body.userId;
        try {
            const userCart = await cart.findOne({user: userId}).populate();
            userCart.items.length = 0;
            res.status(204).send(userCart);
        } 
        catch (error) {
            next(error);
        }
        
    }

    static async clearCart(req, res, next){
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
        const qty = parseInt(req.body.qty)
        const userCart = await cart.findOne({user: userId});

        const existingItem = userCart.items.find(item => item.product == productId);

        if (existingItem) {
            existingItem.quantity ++;
            console.log("qtde do item aumentada")
        } else {
            const addItem = await cartItem.create({product : req.body.productId, quantity: qty})
            userCart.items.push(addItem);
            console.log("item adicionado ao carrinho")
        }

        await userCart.save();
        res.status(201).send(userCart);
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

