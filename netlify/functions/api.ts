import express, { Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import serverless from "serverless-http";
import { Index } from "./lambdaapi/index"
import { OrderHandlers } from "./lambdaapi/handlers/orderHandlers/orderHandlers";
import { OrderRoutes } from "./lambdaapi/routes/orderRoutes/orderRoutes";
import { ItemsHandlers } from "./lambdaapi/handlers/itemsHandlers/itemsHandlers";
import { ItemsRoutes } from "./lambdaapi/routes/itemsRoutes/itemsRoutes";

const app = express();

const ohandler = new OrderHandlers()
const orouter = new OrderRoutes(Router(), ohandler)
const ihandler = new ItemsHandlers()
const itrouter = new ItemsRoutes(Router(), ihandler)
const irouter = new Index(orouter, itrouter, Router())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/", irouter.router);

export const handler = serverless(app);