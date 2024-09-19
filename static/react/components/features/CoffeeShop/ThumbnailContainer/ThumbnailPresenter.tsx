import React, { FC } from "react";
import Thumbnail from "../../../blocks/Thumbnail/Thumbnail";

/*export type item = {
  itemId: string;
  imageId: string;
  title: string;
};*/

interface IThumbnailPresenterProps {
  items: {
    itemId: string
    imageId: string
    title: string
  }[]
}

const ThumbnailPresenter: FC<IThumbnailPresenterProps> = (
  props: IThumbnailPresenterProps
) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => (
        <Thumbnail key={item.itemId} image={item.imageId} title={item.title} />
      ))}
    </>
  );
};

export default ThumbnailPresenter;
