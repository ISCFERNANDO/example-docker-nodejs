import { handlerError } from "./middlewares/error.middleware";
import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);
app.use(handlerError);

export default app;
