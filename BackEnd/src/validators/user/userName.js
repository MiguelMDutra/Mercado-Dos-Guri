import BadRequestError from "../../errors/badRequest.js";

function UserNameValidation(req, res, next) {
    const name = req.body.nome;
        if (!name || typeof name !== "string" || name.trim() === "" || name.length < 3) {
        return next(new BadRequestError("O nome precisa ser válido"));
    } else {
        return next();
    }
}
export default UserNameValidation;