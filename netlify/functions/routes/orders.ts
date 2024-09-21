import { Router } from "express"
import { Orders } from "../models/orders"
import { OrdersContract } from "../models/orders-contracts"

export const orderRoutes = Router()

orderRoutes.route("/")
  .post((req, res) => {
    const orderData: OrdersContract = new Orders()

    res.send("order created")
  })
  .delete((req, res) => {
    res.send("deleted all orders")
  })
  .get((req, res) => {
    res.json({"name": "Product1", "price": "R10"})
  })

// Routes for a single order
orderRoutes.route("/:id")
  .get((req, res) => {
    res.json({"name": "Product2", "price": "R20"})
  })
  .put((req, res) => {
    res.json({"name": "Product3", "price": "R30"})
  })
  .delete((req, res) => {
    res.json({ message: "Successfully deleted order"})
  })