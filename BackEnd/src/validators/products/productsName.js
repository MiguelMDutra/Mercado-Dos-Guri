import BadRequestError from "../../errors/badRequest.js";

function productNameValidation(req, res, next) {
    const name = req.body.name;
        if (!name || typeof name !== "string" || name.trim() === "" || name.length < 3) {
        return next(new BadRequestError("O nome do produto precisa ser válido"));
    } else {
        return next();
    }
}
export default productNameValidation;