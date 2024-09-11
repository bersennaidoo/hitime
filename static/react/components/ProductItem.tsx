import React, { FunctionComponent, useState } from "react";
import { Product } from "../data/entities";

interface IProductItemProps {
  product: Product;
  callback: (product: Product, quantity: number) => void;
}

const ProductItem: FunctionComponent<IProductItemProps> = (props: IProductItemProps) => {
    const {product, callback} = props
    const [quantity, setQuantity] = useState<number>(1)

    return (
        <div className="">
            <h4>
                { product.name }
                <span className="">
                    ${ product.price.toFixed(2)}
                </span>
            </h4>
            <div className="">
                { product.description }
                <button className="" onClick={ () => callback(product, quantity) }>
                    Add To Cart
                </button>
                <select className="" onChange={(ev) => setQuantity(Number(ev.target.value))}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    )
}

export default ProductItem