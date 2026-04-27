import MainError from "./mainError.js";

class BadRequest extends MainError {
  constructor(message = "o pedido não corresponde a nada") {
    super(message, 400);
  }
}

export default BadRequest;
