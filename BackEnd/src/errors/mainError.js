class MainError extends Error {
  constructor(message = "Erro do servidor", status = 500) {
    super(message);
    this.message = message;
    this.status = status;
  }

  errorMessage(res) {
    res.status(this.status).send(this.message);
  }
}

export default MainError;
