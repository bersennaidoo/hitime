export const initialCartState = [];

export type CartTypes = {
    ADD?: string
    REMOVE?: string
}

const cartTypes: CartTypes = { ADD: "ADD", REMOVE: "REMOVE" }

const findItem = ( cart: {
    itemId?: string;
    imageId?: string;
    title?: string;
    price?: number;
    description?: string;
    salePrice?: number;
    quantity?: number
  }[], itemId: any) => cart.find((item) => item.itemId === itemId)

export const cartReducer = (
  state: {
    itemId?: string;
    imageId?: string;
    title?: string;
    price?: number;
    description?: string;
    salePrice?: number;
    quantity?: number
  }[],
  action: { type: string; itemId?: any }
) => {
  switch (action.type) {
    case cartTypes.ADD:
        if (findItem(state, action.itemId)) {
            return state.map((item) => (item.itemId === action.itemId ? { ...item,  quantity: item?.quantity! + 1 } : item))
        }
        return [
            ...state, { itemId: action.itemId, quantity: 1 }
        ]
    case cartTypes.REMOVE:
      return state.filter((item) => item.itemId !== action.itemId)
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};
