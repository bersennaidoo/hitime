import { HookService } from "../../services/HookService/HookService"
import { CoffeeShopApiService } from "../../services/CoffeeShopApi/CoffeeShopApiService"
import { CoffeeShopRouteService } from "../../services/CoffeeShopRoute/CoffeeShopRouteService"
import { Item } from "./Item"
import { Order } from "./Order"
import { CoffeeShopTaxService } from "../../services/CoffeeShopTax/CoffeeShopTaxService"
import { CoffeeShopFormatService } from "../../services/CoffeeShopFormat/CoffeeShopFormatService"
import { CoffeeShopWebStorageService } from "../../services/CoffeeShopWebStorage/CoffeeShopWebStorageService"

export class CoffeeShopModel {
    // react depends on CoffeeShopModel
    // CoffeeModel depends on CoffeeShopApiService, CoffeeShopRouteService HookService
    /*public coffeeShopApiSrv: CoffeeShopApiService
    public coffeeShopRouteSrv?: CoffeeShopRouteService
    public hookSrv?: HookService
    public taxSrv?: CoffeeShopTaxService
    public coffeeShopFormatSrv?: CoffeeShopFormatService
    public coffeeShopWebStorageSrv?: CoffeeShopWebStorageService*/

    constructor(public coffeeShopApiSrv: CoffeeShopApiService = new CoffeeShopApiService(), public coffeeShopRouteSrv: CoffeeShopRouteService = new CoffeeShopRouteService(), public hookSrv: HookService = new HookService(), public taxSrv: CoffeeShopTaxService = new CoffeeShopTaxService(), public coffeeShopFormatSrv: CoffeeShopFormatService = new CoffeeShopFormatService(), public coffeeShopWebStorageSrv: CoffeeShopWebStorageService = new CoffeeShopWebStorageService()) {
        /*this.coffeeShopApiSrv = coffeeShopApiSrv
        this.coffeeShopRouteSrv = coffeeShopRouteSrv
        this.hookSrv = hookSrv
        this.taxSrv = taxSrv
        this.coffeeShopFormatSrv = coffeeShopFormatSrv
        this.coffeeShopWebStorageSrv = coffeeShopWebStorageSrv*/
    }

     public createOrder = (order: Order) => {
        const orderRoute = this.coffeeShopRouteSrv!.getOrderRoute()
        const response = this.coffeeShopApiSrv!.createOrder(orderRoute, order)
        return response
    }


    public listItems = () => {
        const listItemsRoute = this.coffeeShopRouteSrv!.getListItemRoute()
        const response = this.coffeeShopApiSrv!.listItems(listItemsRoute)
        return response
    }

    // add a hero
    public addItem = (item: Item) => {
        const addItemRoute = this.coffeeShopRouteSrv!.getAddItemRoute()
        const itemAdded = this.coffeeShopApiSrv!.addItem(addItemRoute, item)

        return itemAdded
    }

    // update a hero
    public updateItem = (id: string, item: Item) => {
        const updateHeroRoute = this.coffeeShopRouteSrv!.getUpdateItemRoute(id)
        const itemUpdated = this.coffeeShopApiSrv!.updateItem(updateHeroRoute, item)
        return itemUpdated
    }

    public getItemById = (id: string) => {
        const singleItemRoute = this.coffeeShopRouteSrv!.getItemByIdRoute(id)
        const getItem = this.coffeeShopApiSrv!.getItemById(singleItemRoute)

        return getItem
    }

    // delete a hero
    public deleteItem = (id: string) => {
        const deleteItemRoute = this.coffeeShopRouteSrv!.getDeleteItemRoute(id)
        const deletedItem = this.coffeeShopApiSrv!.deleteItem(deleteItemRoute)

        return deletedItem
    }
}
