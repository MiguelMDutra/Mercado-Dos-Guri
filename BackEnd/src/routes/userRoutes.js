import UserController from "../controller/usersController.js";
import express from "express";
import UserNameValidation from "../validators/userName.js";

const userRouter = express.Router();

userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/users/:nome", UserNameValidation, UserController.getUserByName);

userRouter.post("/register", UserController.registerUser);
userRouter.post("/login", UserController.login);
userRouter.post("/users/login", UserController.login);
userRouter.put("/users/:id", UserController.updateUser);
userRouter.delete("/users/:id", UserController.deleteUser);

export default userRouter;
