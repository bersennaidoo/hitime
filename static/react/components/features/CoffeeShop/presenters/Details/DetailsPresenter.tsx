import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import Thumbnail from "../../../../blocks/Thumbnail/Thumbnail"

interface IDetailsPresenterProps {
    items: {
        itemId: string
        imageId: string
        title: string
        price: number
        description: string
        salePrice: number
      }[]
}

const DetailsPresenter: FC<IDetailsPresenterProps> = (props: IDetailsPresenterProps) => {

    const { items } = props

    return (

        <div className="details-component">
            <Outlet />
            <div className="details-component-sidebar">
                {items.map((item) => (
                    <Thumbnail 
                       key={item.itemId}
                       image={item.imageId}
                       title={item.title}
                       itemId={item.itemId}
                    />
                ))}
            </div>
        </div>
    )
}

export default DetailsPresenter

