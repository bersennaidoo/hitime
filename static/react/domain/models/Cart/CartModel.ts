import { Cart } from "./Cart"
import { CartReducerService } from "../../services/CartReducer/CartReducerService"
import { Action } from "./Action"
import { Item } from "./Item"

export class CartModel {

    public initialCartState: Cart
    public cartRedSrv: CartReducerService

    constructor(cartRedServ: CartReducerService) {
        const items: Item[] = []
        this.initialCartState =  { items: items }
        this.cartRedSrv = cartRedServ
    }

    public cartReducer = (state: Item[], action: Action) => {

        const item: Item[] = this.cartRedSrv.Reducer(state, action)

        return item
    }
}