import { HookService } from "../../services/HookService/HookService"
import { CoffeeShopApiService } from "../../services/CoffeeShopApi/CoffeeShopApiService"
import { CoffeeShopRouteService } from "../../services/CoffeeShopRoute/CoffeeShopRouteService"
import { Item } from "./Item"
import { CoffeeShopTaxService } from "../../services/CoffeeShopTax/CoffeeShopTaxService"
import { CoffeeShopFormatService } from "../../services/CoffeeShopFormat/CoffeeShopFormatService"

export class CoffeeShopModel {
    // react depends on CoffeeShopModel
    // CoffeeModel depends on CoffeeShopApiService, CoffeeShopRouteService HookService
    public coffeeShopApiSrv?: CoffeeShopApiService
    public coffeeShopRouteSrv?: CoffeeShopRouteService
    public hookSrv?: HookService
    public taxSrv?: CoffeeShopTaxService
    public coffeeShopFormatSrv?: CoffeeShopFormatService

    constructor(coffeeShopApiSrv?: CoffeeShopApiService, coffeeShopRouteSrv?: CoffeeShopRouteService, hookSrv?: HookService, taxSrv?: CoffeeShopTaxService, coffeeShopFormatSrv?: CoffeeShopFormatService) {
        this.coffeeShopApiSrv = coffeeShopApiSrv
        this.coffeeShopRouteSrv = coffeeShopRouteSrv
        this.hookSrv = hookSrv
        this.taxSrv = taxSrv
        this.coffeeShopFormatSrv = coffeeShopFormatSrv
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
