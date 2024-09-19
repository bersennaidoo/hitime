import React, { FC } from "react"

interface IThumbnailProps {
    image: string
    title: string
}

const Thumbnail: FC<IThumbnailProps> = (props: IThumbnailProps) => {

    const { image , title } = props

    return (
        <a 
          data-cy="thumbnail"
          className="thumbnail-component"
        >
            <div className="thumbnail-component__div">
                <img className="thumbnail-component__img" src={image} alt={title} />
            </div>
            <p className="thumbnail-component__p">{title}</p>
        </a>
    )
}

export default Thumbnail