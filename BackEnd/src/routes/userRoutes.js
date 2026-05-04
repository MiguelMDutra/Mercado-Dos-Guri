import UserController from "../controller/usersController.js";
import express from "express";
import UserNameValidation from "../validators/user/userName.js";
import emailNameValidation from "../validators/user/userEmail.js";
import UserPwdValidation from "../validators/user/userPwdValidation.js";
import tokenValidator from "../middlewares/tokenValidator.js";

const userRouter = express.Router();

userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/users/:nome", UserNameValidation, UserController.getUserByName);

userRouter.post("/register", UserNameValidation, emailNameValidation, UserPwdValidation, UserController.registerUser);
userRouter.put("/users/:id", UserNameValidation, emailNameValidation, UserPwdValidation, UserController.updateUser);
userRouter.delete("/users/:id", UserController.deleteUser);

export default userRouter;
