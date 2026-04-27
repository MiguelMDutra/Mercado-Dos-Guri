import Error404 from "../errors/error404.js";

function error404fn(req, res, next) {
  const erro404 = new Error404();
  next(erro404);
}

export default error404fn;
