// item abstraction for orders
type Item = {
    itemId?: string;
    title?: string
    price?: string;
    salePrice?: string;
    quantity?: number;
  };

export type Order = {
    name: string
    phone: string
    zipCode: string
    items: Item[]
}
