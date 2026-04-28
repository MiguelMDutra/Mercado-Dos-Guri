import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: [true, "o campo de nome é necessário"] },
  email: {
    type: String,
    required: [true, "o campo de email é necessário"],
    unique: [true, "esse email já foi cadastrado"],
  },
  pwd: { type: String, required: [true, "o campo de senha é necessário"] },
  roles: {
    type: String,
    enum: ["user", "admin"],
    default: "user",

  },
});

const user = mongoose.model("users", usersSchema, "users");

export default user;
