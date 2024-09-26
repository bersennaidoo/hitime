import React, { FC, Dispatch } from "react";
import { Item } from "../../../../../domain/ItemModel/item";
import CartRowPresenter from "../CartRow/CartRowPresenter";

interface ICartPresenterProps {
  cart: Item[];
  items: Item[];
  dispatch: Dispatch<{ type: string; itemId: any }>;
}

const CartPresenter: FC<ICartPresenterProps> = (props: ICartPresenterProps) => {
  const { cart, items, dispatch } = props;

  const subTotal = cart.reduce((acc, item) => {
    const detailItem = items.find((i) => i.itemId === item.itemId)
    const itemPrice = detailItem?.salePrice ?? detailItem?.price
    return item.quantity! * itemPrice! + acc
  }, 0)

  return (
    <div className="cart-component">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: Item) => (
              <CartRowPresenter
                key={item.itemId}
                cartItem={item}
                items={items}
                dispatch={dispatch}
              />
            ))}
          </tbody>
        </table>
        <div>
            Subtotal: R 
            {subTotal.toFixed(2)} 
        </div>
        </>
      )}
    </div>
  );
};

export default CartPresenter;
