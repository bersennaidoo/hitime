import { Router } from "express";
import { OrderRoutes } from "./routes/orderRoutes/orderRoutes";
import { ItemsRoutes } from "./routes/itemsRoutes/itemsRoutes";
import { EmployeeRoutes } from "./routes/employeeRoutes/employeeRoutes";

export class Index {
    public ordRoute: OrderRoutes
    public itemRoute: ItemsRoutes
    public employeeRoute: EmployeeRoutes
    public router: Router

    constructor(ordRoute: OrderRoutes, itemRoute: ItemsRoutes, employeeRoute: EmployeeRoutes, router: Router) {
        this.ordRoute = ordRoute
        this.itemRoute = itemRoute
        this.employeeRoute = employeeRoute
        this.router = router

        this.router.use("/orders", this.ordRoute.router)
        this.router.use("/items", this.itemRoute.router)
        this.router.use("/isEmployeeOfTheMonth", this.employeeRoute.router)

    }
}