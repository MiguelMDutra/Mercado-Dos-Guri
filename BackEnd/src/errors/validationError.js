import BadRequest from "./badRequest.js";

class ValidationError extends BadRequest {
  constructor(error) {
    console.log(error);
    const validitionErrorMessage = Object.values(error.errors)
      .map((instance) => instance.message)
      .join("; ");

    super(
      `os seguintes erros foram encontrados: ${validitionErrorMessage}`,
      400,
    );
  }
}

export default ValidationError;
