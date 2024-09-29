export class CoffeeShopRouteService {
    // create routes for heroes

    public listItems = "/api/items"
    public addItem = "/api/items"
    public getItemById = `/api/items`
    public updateItem = `/api/items`
    public deleteItem = `/api/items`

    public getDeleteItemRoute = (id: string) => {
        return this.deleteItem + `/${id}`
    }
    public getUpdateItemRoute = (id: string) => {
        return this.updateItem
    }

    public getItemByIdRoute = (id: string) => {
        return this.getItemById + `/${id}`
    }

    public getAddItemRoute = () => {
        return this.addItem
    }

    public getListItemRoute = () => {

        return this.listItems
    }
}
