import React, { FC, Dispatch } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../../../../domain/models/Cart/Item";
//import { CartTypes } from "../../../../reducers/coffeeshop/cartReducer";

interface IDetailItemPresenterProps {
  items: {
    itemId: string;
    imageId: string;
    title: string;
    price: string;
    description: string;
    salePrice: string;
  }[];
  addToCart: (itemId: any) => void;
}



const DetailItemPresenter: FC<IDetailItemPresenterProps> = (
  props: IDetailItemPresenterProps
) => {
  const { items, addToCart } = props;
  const { id } = useParams();

  const detailItem = items.find((item) => item.itemId == id);

  const addItemToCart = () => {
    addToCart(detailItem?.itemId);
  };

  return (
    <div className="detail-item-component">
      {detailItem ? (
        <>
          <img
            className="details-image"
            src={detailItem?.imageId}
            alt={detailItem?.title}
          />
          <h2>{detailItem?.title}</h2>
          {detailItem.description && <h6>{detailItem.description}</h6>}
          <div>
            R
            {(
              (detailItem?.salePrice as any) ? (detailItem?.salePrice as any) : (detailItem?.price as any)
            ).toFixed(2)}
          </div>
          <button type="button" onClick={addItemToCart}>Add To Cart</button>
        </>
      ) : (
        <h2>Unknown Item</h2>
      )}
    </div>
  );
};

export default DetailItemPresenter;
