import user from "../models/users.js";
import BadRequest from "../errors/badRequest.js";

class UserController {
    static async getAllUsers(req, res, next) {
        try {
            const users = await user.find();
            res.status(200).send(users);
        } catch (error) {
            next(error);
        }
    }
    static async getUserByName(req, res, next) {
        try {
            const { nome } = req.params;
            const userByName = await user.findOne({ nome });
            res.status(200).send(userByName);
        } catch (error) {
            next(new BadRequest("Usuário não encontrado"));
        }
    }

    static async registerUser(req, res, next) {
        try {
            const newUser = await user.create(req.body);
            res.status(201).send(newUser);
        } catch (error) {
            next(error);
        }
    }
    static async deleteUser(req, res, next) {
        try {
            const { id } = req.params;
            await user.findByIdAndDelete(id);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
    static async updateUser(req, res, next) {
        try {
            const { id } = req.params;
            const updatedUser = await user.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).send(updatedUser);
        } catch (error) {
            next(error);
        }
    }   
}

export default UserController;