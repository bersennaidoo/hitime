import { Order } from "./order"

export interface OrdersContract {
    validateOrder: (order: Order) => { valid: boolean} | { error: string, valid: boolean }
    createOrder: (order: Order) => { success: boolean } | { success: boolean, error: string, valid: boolean}
    deleteOrders: () => Order[]
    deleteOrder: (id: number) => Order[]
    editOrder: (id: number, editOrder: Order) => { success: boolean, order: Order} | { success: boolean, error: string, valid: boolean }
    getOrders: () => Order[]
}