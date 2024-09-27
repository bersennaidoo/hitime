import React, { FC, Dispatch} from "react";
import { Item } from "../../../../../domain/models/Cart/Item";
import { CartTypes } from "../../../../../domain/models/Cart/CartTypes";

interface ICartRowPresenterProps {
  items: Item[];
  cartItem: Item;
  dispatch: Dispatch<{type: string, itemId: any}>
}

const CartRowPresenter: FC<ICartRowPresenterProps> = (
  props: ICartRowPresenterProps
) => {
  const { cartItem, items, dispatch } = props;

  const item = items.find((i) => i.itemId === cartItem.itemId);



  const removeItemFromCart = () => {
    const cartType: CartTypes = { REMOVE: "REMOVE" }
    dispatch({ type: cartType.REMOVE as string, itemId: item?.itemId})
  }

  const addToCartFromCart = () => {
    const cartType: CartTypes = { ADD: "ADD" }
    dispatch({ type: cartType.ADD as string, itemId: item?.itemId})
  }

  const substractFromCart = () => {
    const cartType: CartTypes = { SUBTRACT: "SUBTRACT"}
    dispatch({ type: cartType.SUBTRACT as string, itemId: item?.itemId})
  }

  return (
    <tr>
      <td>{cartItem.quantity}</td>
      <td>{item?.title}</td>
      <td>
        R{((item?.salePrice ?? item?.price)! * cartItem?.quantity!).toFixed(2)}
      </td>
      <td>
        <button type="button" onClick={addToCartFromCart}>+</button>
      </td>
      <td>
        <button type="button" onClick={removeItemFromCart}>X</button>
      </td>
       <td>
        <button type="button" onClick={substractFromCart}>-</button>
      </td>
    </tr>
  );
};

export default CartRowPresenter