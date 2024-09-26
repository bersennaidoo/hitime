import React, { FC } from "react";
import { Link } from "react-router-dom";

interface IThumbnailProps {
  image: string;
  title: string;
  itemId: string;
}

const Thumbnail: FC<IThumbnailProps> = (props: IThumbnailProps) => {
  const { image, title, itemId } = props;

  return (
    <Link
      data-cy="thumbnail"
      className="thumbnail-component"
      to={`/coffeeshop/details/${itemId}`}
    >
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
};

export default Thumbnail;
