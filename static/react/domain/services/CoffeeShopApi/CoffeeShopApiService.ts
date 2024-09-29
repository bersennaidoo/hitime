import { useCallback } from "react";
import { Item } from "../../models/CoffeeShop/Item";
import axios, { AxiosResponse } from "axios";

export class CoffeeShopApiService {

  public listItems = (route: string) => {

    const response = this.getData(route);

    return response;
  };

  // add a hero
  public addItem = (route: string, hero: Item) => {
    // call with axios
    // return hero successfully add
  };

  // update a hero
  public updateItem = (route: string, item: Item) => {
    // call with axios
    // return hero updated
  };

  public getItemById = (route: string) => {
    //call with axios
    // return hero
  };

  // delete a hero
  public deleteItem = (route: string) => {
    // call with axios
    // return hero successfully deleted
  };

  private parseList = (response: AxiosResponse<any>) => {
    if (response.status !== 200) throw Error(response.statusText);
    let list = response.data;
    if (typeof list !== "object") {
      list = [];
    }

    return list;
  };

  private getData = useCallback(async (route: string) => {
    const promise = await axios.get(route);
    return this.parseList(promise);
  }, []);
}
