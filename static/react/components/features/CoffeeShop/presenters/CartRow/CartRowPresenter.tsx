import React, { FC, Dispatch} from "react";
import { Item } from "../../../../../domain/ItemModel/item";
import { CartTypes } from "../../../../reducers/coffeeshop/cartReducer";

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
    </tr>
  );
};

export default CartRowPresenter