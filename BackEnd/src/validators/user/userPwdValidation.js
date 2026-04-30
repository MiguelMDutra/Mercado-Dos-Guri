import BadRequestError from "../../errors/badRequest.js";

function UserPwdValidation(req, res, next) {
    const pwd = req.body.pwd;
        if (!pwd || typeof pwd !== "string" || pwd.trim() === "" || pwd.length <= 8 || pwd.includes(" ")) {
        return next(new BadRequestError("A senha precisa ter pelo menos 8 caracteres e ser válida"));
    } else if (!pwd.includes("@") && !pwd.includes("#") && !pwd.includes("$") && !pwd.includes("%") && !pwd.includes("&")) {
        return next(new BadRequestError("A senha precisa conter pelo menos um dos seguintes caracteres: @, #, $, %, &"));
    }else {
        return next();
    }
}
export default UserPwdValidation;