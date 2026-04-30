import BadRequestError from "../../errors/badRequest.js";

function emailNameValidation(req, res, next) {
    const email = req.body.email;
        if (!email || typeof email !== "string" || email.trim() === "" || email.includes("@") === false || email.endsWith("@") === true) {
        return next(new BadRequestError("O email precisa ser válido"));
    } else {
        return next();
    }
}

export default emailNameValidation;