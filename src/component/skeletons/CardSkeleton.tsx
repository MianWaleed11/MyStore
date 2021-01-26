import React from "react";
import { selectloading } from "../../redux/Products/products.selector";
import Skeleton from "react-loading-skeleton";

export interface CardSkeletonProps {}

const CardSkeleton: React.FC<CardSkeletonProps> = () => {




  return (
    <div className="card">
   
      <div className="card-body">
        <p className="card-text text-dark">
          {" "}
          <Skeleton  />
        </p>
        <p className="footer_text text-capitalize">
          <Skeleton  />
        </p>
      </div>
      <div className="card-footer">
        <p className="Show_more_btn">
          <Skeleton  />
        </p>
      </div>
    </div>
  );
};

export default CardSkeleton;
