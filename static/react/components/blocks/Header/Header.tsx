import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../../domain/models/Cart/Item";

const CoffeeLogo = "/images/coffee/coffee.svg";
const CartIcon = "/images/coffee/cart.svg"

/*interface IHeaderProps {
  cart: {
    itemId?: string;
    imageId?: string;
    title?: string;
    price?: string;
    description?: string;
    salePrice?: string;
    quantity?: number
  }[]
}*/

interface IHeaderProps {
  cart: Item[]
}


const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const { cart } = props;
  const cartQuantity = cart.reduce((acc, item) => acc + item?.quantity!, 0)

  return (
    <div data-cy="header" className="header-component">
      <Link to="/coffeeshop">
        <img src={CoffeeLogo} alt="coffee logo" />
        <h1 className="pt-5 pe-5 pb-5 link-unstyled text-secondary">Coffee Shop</h1>
      </Link>
      <div className="menu">
        <Link to="/coffeeshop/cart">
          <img src={CartIcon} alt="Cart" />
          <div className="badge">{cartQuantity}</div>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Header;
