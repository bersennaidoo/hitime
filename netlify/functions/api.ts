import express, { Router } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import serverless from "serverless-http";
import { Index } from "./lambdaapi/index"
import { OrderHandlers } from "./lambdaapi/handlers/orderHandlers/orderHandlers";
import { OrderRoutes } from "./lambdaapi/routes/orderRoutes/orderRoutes";
import { ItemsHandlers } from "./lambdaapi/handlers/itemsHandlers/itemsHandlers";
import { ItemsRoutes } from "./lambdaapi/routes/itemsRoutes/itemsRoutes";
import { EmployeeRoutes } from "./lambdaapi/routes/employeeRoutes/employeeRoutes";
import { EmployeeHandlers } from "./lambdaapi/handlers/employeeHandlers/employeeHandlers";
import { OrderModel } from "./domain/models/OrderModel/orderModel";
import { StoreService } from "./domain/services/StoreService/storeService";
import { ValidatorService } from "./domain/services/ValidatorService/validatorService";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const vsvc = new ValidatorService()
const ssvc = new StoreService()
let omodel: OrderModel = new OrderModel(vsvc, ssvc)
const ohandler = new OrderHandlers(omodel)
const orouter = new OrderRoutes(Router(), ohandler)
const ihandler = new ItemsHandlers()
const itrouter = new ItemsRoutes(Router(), ihandler)
const ehandler = new EmployeeHandlers()
const erouter = new EmployeeRoutes(Router(), ehandler)
const irouter = new Index(orouter, itrouter, erouter, Router())



app.use("/api/", irouter.router);

export const handler = serverless(app);