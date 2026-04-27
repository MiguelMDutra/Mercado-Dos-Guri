import user from "../models/users";
import MainError from "../errors/mainError.js";

function isAdmin(req, res, next) {
    if (user.roles === "admin") {
        next();
    } else {
        next(new MainError("Acesso negado", 403));
    }
}

export default isAdmin;