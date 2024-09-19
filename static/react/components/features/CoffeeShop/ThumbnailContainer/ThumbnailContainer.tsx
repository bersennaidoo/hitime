import React, { FC } from "react"
import ThumbnailPresenter from "./ThumbnailPresenter"

interface IThumbnailContainerProps {
    items: {
        itemId: string
        imageId: string
        title: string
    }[]
}

const ThumbnailContainer: FC<IThumbnailContainerProps> = (props: IThumbnailContainerProps) => {

    const { items } = props

    return (
        <ThumbnailPresenter items={items} />
    )
}

export default ThumbnailContainer