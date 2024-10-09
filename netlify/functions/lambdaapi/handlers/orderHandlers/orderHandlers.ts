import { Request, Response } from "express";
import { OrderModel } from "../../../domain/models/OrderModel/orderModel";
import { StoreService } from "../../../domain/services/StoreService/storeService";
import { ValidatorService } from "../../../domain/services/ValidatorService/validatorService";

export class OrderHandlers {
  constructor(public orderModel: OrderModel) {}

  public addOrder = (req: Request, res: Response) => {
    const success = this.orderModel.createOrder(req.body);

    try {
      res.status(201).json({
        message: success,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  };

  public getOrders = (req: Request, res: Response) => {
    const orders = this.orderModel.getOrders();

    try {
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  }
}
