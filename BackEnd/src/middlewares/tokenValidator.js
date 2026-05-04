import jwt from "jsonwebtoken"
import BadRequest from "../errors/badRequest.js";

const tokenValidator = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return BadRequest("Token não fornecido").errorMessage(res);
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return BadRequest("Token inválido").errorMessage(res);
    }
}

export default tokenValidator;