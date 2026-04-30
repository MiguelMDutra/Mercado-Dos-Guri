import BadRequestError from "../../errors/badRequest.js";

function productUrlValidation(req, res, next) {
    const url = req.body.productImage;
        if (!url || typeof url !== "string" || url.trim() === "" || url.length < 3 || !url.endsWith(".jpg") && !url.endsWith(".jpeg") && !url.endsWith(".png")) {
        return next(new BadRequestError("A URL da imagem do produto precisa ser válida"));
    } else {
        return next();
    }
}
export default productUrlValidation;