import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import * as Action from "../../../redux/categories/slice";
import "./ProductsCards.css";

export interface CardsProps {
  category: string;
  image: string;
  showMore?: () => void;
  price?: string;
  title?: string;
}

const ProductsCards: React.FC<CardsProps> = (props) => {
  return (
    <>
      <div className="card" onClick={props.showMore}>
        <img className="card-img-top" src={props.image} alt="Card cap" />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
          <p className="footer_text text-capitalize">{props.category}</p>
        </div>
        <div className="card-footer">
          <p className="Show_more_btn">Show More</p>
        </div>
      </div>
    </>
  );
};

export default ProductsCards;
