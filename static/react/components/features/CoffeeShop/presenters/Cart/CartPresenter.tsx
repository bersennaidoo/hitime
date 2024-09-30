import React, { FC, Dispatch, useState, useRef } from "react";
import { Item } from "../../../../../domain/models/Cart/Item";
import CartRowPresenter from "../CartRow/CartRowPresenter";
import { CoffeeShopModel } from "../../../../../domain/models/CoffeeShop/CoffeeShopModel";
import { CoffeeShopTaxService } from "../../../../../domain/services/CoffeeShopTax/CoffeeShopTaxService";
import { CoffeeShopApiService } from "../../../../../domain/services/CoffeeShopApi/CoffeeShopApiService";
import { CoffeeShopRouteService } from "../../../../../domain/services/CoffeeShopRoute/CoffeeShopRouteService";
import { HookService } from "../../../../../domain/services/HookService/HookService";
import { CoffeeShopFormatService } from "../../../../../domain/services/CoffeeShopFormat/CoffeeShopFormatService";
import axios from "axios";

interface ICartPresenterProps {
  cart: Item[];
  items: Item[];
  dispatch: Dispatch<{ type: string; itemId: any }>;
}

const CartPresenter: FC<ICartPresenterProps> = (props: ICartPresenterProps) => {
  const { cart, items, dispatch } = props;

  const coffeeShopApiSrv = new CoffeeShopApiService();
  const coffeeShopRouterSrv = new CoffeeShopRouteService();
  const hookSrv = new HookService();
  const coffeeShopTaxSrv = new CoffeeShopTaxService();
  const coffeeShopFormatSrv = new CoffeeShopFormatService();
  const coffeeShopModel = new CoffeeShopModel(
    coffeeShopApiSrv,
    coffeeShopRouterSrv,
    hookSrv,
    coffeeShopTaxSrv,
    coffeeShopFormatSrv
  );

  const [name, setName] = useState<string>("");
  const [zipcode, setZipCode] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isEmployeeOfTheMonth, setIsEmployeeOfTheMonth] =
    useState<boolean>(false);
  let debounceRef = useRef<any>(null)

  const subTotal = isEmployeeOfTheMonth
    ? 0
    : cart.reduce((acc, item) => {
        const detailItem = items.find((i) => i.itemId === item.itemId);
        const itemPrice: any = detailItem?.salePrice
          ? detailItem?.salePrice
          : detailItem?.price;
        return ((item.quantity! * itemPrice!) as any) + acc;
      }, 0);
  const tax = coffeeShopModel.taxSrv!.calculateTax(zipcode, subTotal);
  const total = coffeeShopModel.taxSrv!.calculateTotal(subTotal, tax);

  const isFormValid = zipcode.length === 5 && name.trim();

  const submitOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  /*const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };*/

  const onChangeName = (newName: string) => {
    setName(newName);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current as any)
    }
    debounceRef.current = setTimeout(() => {
      axios
        .get(`/api/isEmployeeOfTheMonth?name=${newName}`)
        .then((response) =>
          setIsEmployeeOfTheMonth(response?.data?.isEmployeeOfTheMonth)
        )
        .catch(console.error);
    }, 300);
  };

  const onChangeZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneFormatted =
      coffeeShopModel.coffeeShopFormatSrv!.setFormattedPhone(
        event.target.value
      );
    setPhone(phoneFormatted);
  };

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
          <div>Subtotal: R{subTotal.toFixed(2)}</div>
          {zipcode.length === 5 ? (
            <>
              <div>Tax: R {tax.toFixed(2)}</div>
              <div>Total: R {total.toFixed(2)}</div>
            </>
          ) : (
            <div className="warning">Enter ZIP Code to get total</div>
          )}

          <h2>Checkout</h2>
          <form onSubmit={submitOrder}>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => onChangeName(event.target.value)}
                required={true}
              />
            </label>
            <label htmlFor="phone">
              Phone Number
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={onChangePhone}
              />
            </label>
            <label htmlFor="zipcode">
              ZIP Code
              <input
                id="zipcode"
                type="text"
                maxLength={5}
                inputMode="numeric"
                value={zipcode}
                onChange={onChangeZipCode}
                required={true}
              />
            </label>
            <button type="submit" disabled={!isFormValid}>
              Order Now
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CartPresenter;
