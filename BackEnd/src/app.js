import express from "express";
import conectaDB from "./db/dbConnect.js";
import routes from "./routes/mainRoutes.js";
import error404fn from "./middlewares/erro404.js";
import errorHandler from "./middlewares/errorHandler.js";

const conexaoServer = await conectaDB();

conexaoServer.on("error", (erro) => {
  console.error(`error: ${erro}`);
});
conexaoServer.once("open", () => {
  console.log("conectado com o banco de dados!");
});

const app = express();
routes(app);
app.use(error404fn);
app.use(errorHandler);

export default app;
