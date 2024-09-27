import { CartTypes } from "../../models/Cart/CartTypes";
import { Item } from "../../models/Cart/Item";
import { Action } from "../../models/Cart/Action";

export class CartReducerService {
  public cartTypes: CartTypes;

  constructor(cartTypes: CartTypes) {
    this.cartTypes = cartTypes;
  }

  public Reducer(state: Item[], action: Action) {
    switch (action.type) {
      case this.cartTypes.ADD:
        if (this.findItem(state, action.itemId)) {
          return state.map((item) =>
            item.itemId === action.itemId
              ? { ...item, quantity: item?.quantity! + 1 }
              : item
          );
        }
        return [...state, { itemId: action.itemId, quantity: 1 }];

      case this.cartTypes.SUBTRACT:
        if (this.findItem(state, action.itemId)) {
          return state.map((item) =>
            item.itemId === action.itemId && item.quantity !== 0
              ? { ...item, quantity: item?.quantity! - 1 }
              : item
          );
        }
        return [...state, { itemId: action.itemId, quantity: 0 }];

      case this.cartTypes.REMOVE:
        return state.filter((item) => item.itemId !== action.itemId);
      default:
        throw new Error(`Invalid action type ${action.type}`);
    }
  }

  private findItem(cart: Item[], itemId: any) {
    return cart.find((item) => item.itemId === itemId);
  }
}
