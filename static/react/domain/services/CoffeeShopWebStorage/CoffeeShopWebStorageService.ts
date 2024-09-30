import { Item } from "../../models/Cart/Item"

export class CoffeeShopWebStorageService {

    public storageKey = "cart"


    public setItem = (items: Item[]) => {
        localStorage.setItem(this.storageKey, JSON.stringify(items))
    }

    public getItem = () => {

        const storedCart = JSON.parse(localStorage.getItem(this.storageKey)!) as Item[]

        return storedCart
    }
}