import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/blocks/Header/Header";
import ThumbnailContainer from "./components/features/CoffeeShop/ThumbnailContainer/ThumbnailContainer";
import NotFound from "./components/blocks/NotFound/NotFound";
import DetailsPresenter from "./components/features/CoffeeShop/presenters/Details/DetailsPresenter";
import DetailItemPresenter from "./components/features/CoffeeShop/presenters/DetailItem/DetailItemPresenter";
import { CartTypes } from "./domain/models/Cart/CartTypes";
import CartPresenter from "./components/features/CoffeeShop/presenters/Cart/CartPresenter";
import { CartReducerService } from "./domain/services/CartReducer/CartReducerService";
import { CartModel } from "./domain/models/Cart/CartModel";

function App() {
  const [items, setItems] = useState([]);

  const cartTypes: CartTypes = { ADD: "ADD", REMOVE: "REMOVE", SUBTRACT: "SUBTRACT" }
  const cartReducerSrv: CartReducerService = new CartReducerService(cartTypes)
  const cartModel: CartModel = new CartModel(cartReducerSrv)

  const [cart, dispatch] = useReducer(cartModel.cartReducer, cartModel.initialCartState.items)
  
  const addToCart = (itemId: any) => dispatch({type: cartTypes.ADD as string, itemId})

  useEffect(() => {
    axios
      .get("/api/items")
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="pt-5 mt-5">
      <BrowserRouter>
        <Header cart={cart}/>
        <Routes>
          <Route path="/coffeeshop/cart" element={<CartPresenter cart={cart} dispatch={dispatch} items={items} />} />
          <Route
            path="/coffeeshop/details"
            element={<DetailsPresenter items={items} />}
          >
            <Route path=":id" element={<DetailItemPresenter items={items} addToCart={addToCart}/>} />
            <Route index element={<div>No Item Selected</div>} />
          </Route>
          <Route
            path="/coffeeshop"
            element={<ThumbnailContainer items={items} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
