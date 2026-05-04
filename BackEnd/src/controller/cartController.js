import { cart } from "../models/cartModel.js"
import { cartItem } from "../models/cartModel.js"
import user from "../models/users.js";

class CartController {
    static async createCart(req, res, next){
        console.log("createCart req sent")
        const userId = req.body.userId;
        
        try {
            const userCart = await cart.findOne({user: userId}).populate();
            const newCart = await cart.create({ user: userId, items: [] });
            res.status(201).send(newCart);
        } 
        catch (error) {
            console.log("user cart already created");
            next(error);
        }
    }
    
    static async getCart(req, res, next){
        console.log("getCart req sent");
        const userId = req.body.userId;
        try {
            const userCart = await cart.findOne({user: userId}).populate();
            console.log("user cart found");
            res.status(200).send(userCart);
            
        } 
        catch (error) {
            console.log("user cart not found");
            next(error);
        }
        
    }

    static async clearCart(req, res, next){
        console.log("clearCart req sent");
        const userId = req.body.userId;
        try {
            const userCart = await cart.findOne({user: userId}).populate();
            userCart.items.length = 0;
            res.status(200).send(userCart);
        } 
        catch (error) {
            next(error);
        }
        
    }

    static async addToCart(req, res, next) {
        console.log("addToCart req sent");
        const userId = req.body.userId;
        const productId = req.body.productId;
        const qty = parseInt(req.body.qty)
        try{
            const userCart = await cart.findOne({user: userId});

            const existingItem = userCart.items.find(item => item.product == productId);

            if (existingItem) {
                existingItem.quantity ++;
                console.log("qtde do item aumentada")
            } else {
                const addItem = await cartItem.create({product : req.body.productId, quantity: qty})
                userCart.items.push(addItem);
                console.log("item novo adicionado ao carrinho")
            }

            await userCart.save();
            res.status(201).send(userCart);
        }
        catch (error) {
            next(error);
        }
    }



    static async removeFromCart(req, res, next) {
        console.log("removeFromCart req sent");
        const userId = req.body.userId;
        const productId = req.body.productId;
        try{
            const userCart = await cart.findOne({user: userId});
            
            const itemToRemove = userCart.items.find(i => i.product == productId);
            const itemFound = (String(itemToRemove) != "undefined");
            console.log("item found: "+itemFound)

            if (itemToRemove.quantity > 1){
                itemToRemove.quantity --;
            }
            else{
                const index = userCart.items.indexOf(itemToRemove);
                if (index > -1) {
                    userCart.items.splice(index, 1);
                }
            }
            
            await userCart.save();
            res.status(200).send(userCart);
        }
        catch (error) {
            next(error);
        }
    }
}

export default CartController;

