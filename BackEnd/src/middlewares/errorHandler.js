import MainError from "../errors/mainError.js";
import BadRequest from "../errors/badRequest.js";
import ValidationError from "../errors/validationError.js";
import Error404 from "../errors/error404.js";
import mongoose from "mongoose";

function errorHandler(error, req, res, next) {
  if (error instanceof mongoose.Error.CastError) {
    return new BadRequest("algum dado não está valido").errorMessage(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    return new ValidationError(error).errorMessage(res);
  } else if (error instanceof Error404) {
    return error.errorMessage(res);
  } else if (error instanceof MainError) {
    return error.errorMessage(res);
  } else {
    return new MainError().errorMessage(res);
  }
}

export default errorHandler;
