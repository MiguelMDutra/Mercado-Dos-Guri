import MainError from "./mainError.js";

class Error404 extends MainError {
  constructor(message = "página não encontrada :(") {
    super(message, 404);
  }
}

export default Error404;
