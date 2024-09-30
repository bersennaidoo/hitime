import React, { FC } from "react";
import Thumbnail from "../../../blocks/Thumbnail/Thumbnail";

interface IThumbnailPresenterProps {
  items: {
    itemId: string
    imageId: string
    title: string
    price: string
    description: string
    salePrice: string
  }[]
}

const ThumbnailPresenter: FC<IThumbnailPresenterProps> = (
  props: IThumbnailPresenterProps
) => {
  const { items } = props;

  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail key={item.itemId} image={item.imageId} title={item.title} itemId={item.itemId} />
      ))}
    </div>
  );
};

export default ThumbnailPresenter;
