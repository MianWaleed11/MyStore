import React from "react";
import "./ProductsCards.css";
import { IproductsCardsProps } from "../../../interfaces";
import Skeleton from "react-loading-skeleton";
import { selectloading } from "../../../redux/Products/products.selector";
import { useSelector } from "react-redux";
import CardSkeleton from "../../skeletons/CardSkeleton";

export const ProductsCards: React.FC<IproductsCardsProps> = (props) => {
  const isLoading = useSelector(selectloading);

  console.log("ist", isLoading);
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={props.image}
          alt="Card cap"
          onClick={props.showMore}
        />
        <div className="card-body">
          <p className="card-text text-dark">{props.title}</p>
          <p className="footer_text text-capitalize">
            <span className="category">Category</span>:{props.category}
          </p>
          {props.showPrice ? (
            <p className="text-capitalize text-dark">
              <span className="price">Price</span>:{props.price}
            </p>
          ) : null}
        </div>
        <div className="card-footer">
          <p className="Show_more_btn" onClick={props.showMore}>
            Show More
          </p>
        </div>
      </div>
    </>
  );
};
