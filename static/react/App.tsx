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
import { CoffeeShopApiService } from "./domain/services/CoffeeShopApi/CoffeeShopApiService";
import { CoffeeShopRouteService } from "./domain/services/CoffeeShopRoute/CoffeeShopRouteService";
import { CoffeeShopModel } from "./domain/models/CoffeeShop/CoffeeShopModel";
import { HookService } from "./domain/services/HookService/HookService";
import { Item } from "./domain/models/CoffeeShop/Item"
import { CoffeeShopWebStorageService } from "./domain/services/CoffeeShopWebStorage/CoffeeShopWebStorageService";

function App() {
   
  // Create and Inject dependencies into CoffeeShopModel
  const coffeeShopRouterSrv = new CoffeeShopRouteService()
  const coffeeShopApiSrv = new CoffeeShopApiService()
  const hookSrv = new HookService()
  const coffeeShopWebStorageSrv = new CoffeeShopWebStorageService()
  const coffeeShopModel = new CoffeeShopModel(coffeeShopApiSrv, coffeeShopRouterSrv, hookSrv)

  const [items, setItems] = useState<Item[]>([]);

  const cartTypes: CartTypes = { ADD: "ADD", REMOVE: "REMOVE", SUBTRACT: "SUBTRACT" }
  const cartReducerSrv: CartReducerService = new CartReducerService(cartTypes)
  const cartModel: CartModel = new CartModel(cartReducerSrv)

  //const [cart, dispatch] = useReducer(cartModel.cartReducer, cartModel.initialCartState.items)
  const [cart, dispatch] = useReducer(
    cartModel.cartReducer, cartModel.initialCartState.items, (initialState) => {
      try {
        const storedCart = coffeeShopModel.coffeeShopWebStorageSrv.getItem()
        return storedCart || initialState
      } catch (error) {
        console.log("Error parsing cart", error)
        return initialState
      }
    }
  )
  
  const addToCart = (itemId: any) => dispatch({type: cartTypes.ADD as string, itemId})

  useEffect(() => {
    coffeeShopModel.coffeeShopWebStorageSrv!.setItem(cart)
  }, [cart])

  // Ask Coffee Shop domain model to list its items and set app component state
  useEffect(() => {
    const response = coffeeShopModel.listItems()
    response.then((data) => {
      setItems(data)
    })
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
