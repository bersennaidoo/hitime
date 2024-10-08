import { zip } from "ramda";
import { Validator } from "../../interfaces/validator";
import { Storer } from "../../interfaces/storer";
import { Order } from "./order";
import { StoreService } from "../../services/StoreService/storeService";
import { ValidatorService } from "../../services/ValidatorService/validatorService";

export class OrderModel {
  public validator: ValidatorService;
  public storer: StoreService;

  constructor(validator: ValidatorService, storer: StoreService) {
    this.validator = validator;
    this.storer = storer;
  }

  public createOrder(order: Order):
    | { success: boolean }
    | { success: boolean; error: string; valid: boolean } {

    /*const result = this.validator.validateOrder(order)
    if (!result.valid) {
      return { success: false, ...result}
    }*/

    const created = this.storer.createOrder(order)

    return created
  }

  public deleteOrders() {
    this.storer.deleteOrders()
  }

  public deleteOrder(id: number) {
    this.storer.deleteOrder(id)
  }

  public editOrder(id: number, editOrder: Order):
    | { success: boolean }
    | { success: boolean; error: string; valid: boolean } {

    const result = this.validator.validateOrder(editOrder)
    if (!result.valid) {
      return { success: false, ...result }
    }

    const edited = this.storer.editOrder(id, editOrder)

    return edited
  }

  public getOrders(): Order[] {

    const orders = this.storer.getOrders()

    return orders;
  }
}
