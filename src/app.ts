import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import bodyParser from "body-parser";
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(routes);

export default app;
