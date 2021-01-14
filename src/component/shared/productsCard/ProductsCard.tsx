<<<<<<< HEAD
import React from "react";
import "./ProductsCards.css";
import { IproductsCardsProps } from "../../../interfaces";
import ReactPlaceholder from "react-placeholder";

export const ProductsCards: React.FC<IproductsCardsProps> = (props) => {
  return (
    <>
      {/* <ReactPlaceholder type='media' rows={7} ready={}> */}
        <div className="card">
          <img
            className="card-img-top"
            src={props.image}
            alt="Card cap"
            onClick={props.showMore}
          />
          <div className="card-body">
            <p className="card-text text-dark">{props.title}</p>
            <p className="footer_text text-capitalize ">{props.category}</p>
          </div>
          <div className="card-footer">
            <p className="Show_more_btn">Show More</p>
          </div>
        </div>
      {/* </ReactPlaceholder> */}
    </>
  );
};
=======
>>>>>>> waleed
