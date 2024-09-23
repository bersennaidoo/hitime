import { Router } from "express";
import { OrderRoutes } from "./routes/orderRoutes/orderRoutes";
import { ItemsRoutes } from "./routes/itemsRoutes/itemsRoutes";

export class Index {
    public ordRoute: OrderRoutes
    public itemRoute: ItemsRoutes
    public router: Router

    constructor(ordRoute: OrderRoutes, itemRoute: ItemsRoutes, router: Router) {
        this.ordRoute = ordRoute
        this.itemRoute = itemRoute
        this.router = router

        this.router.use("/orders", this.ordRoute.router)
        this.router.use("/items", this.itemRoute.router)

    }
}