import MainError from "./mainError.js";

class duplicatedEmail extends MainError {
    constructor(error){
        const campo = Object.keys(error.cause.keyValue)[0];
        super(`Um usuário com esse ${campo} já foi cadastrado`, 409);
    }
}

export default duplicatedEmail;