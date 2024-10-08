import React, { FC } from "react";
import ThumbnailPresenter from "./ThumbnailPresenter";

interface IThumbnailContainerProps {
  items: {
    itemId: string;
    imageId: string;
    title: string;
    price: string;
    description: string;
    salePrice: string;
  }[];
}

const ThumbnailContainer: FC<IThumbnailContainerProps> = (
  props: IThumbnailContainerProps
) => {
  const { items } = props;

  return (
    <div>
      <ThumbnailPresenter items={items} />
    </div>
  );
};

export default ThumbnailContainer;
