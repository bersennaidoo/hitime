import express, { Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import serverless from "serverless-http";
import { routes } from "./routes/index"

const api = express();

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({ extended: true }))
api.use(cookieParser())


//const router = Router();
//router.get("/hello", (req, res) => res.send("Hello World!"));

api.use("/api/", routes);

export const handler = serverless(api);

