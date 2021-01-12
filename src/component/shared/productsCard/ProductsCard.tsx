import React, { useEffect } from "react";
import { Card, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import * as Action from "../../../redux/products/slice";

export interface CardsProps {}

const ProductsCards: React.FC<CardsProps> = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state: any) => state.productsReducer);

  useEffect(() => {
    dispatch(Action.allProducts());
  }, []);

  const response = productsState.products.map((v: any, i: number) => {
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
        <div className="card" style={{ width: "18rem",borderRadius:'12px' }}>
          <h6 className="card-title text-center text-capitalize mb-4">
            {v.category}
          </h6>
          <img
          style={{borderRadius:'30%'}}
            className="card-img-top"
            src={v.image}
            alt="Card cap"
            width="50px"
            height="200px"
          />
          <div className="card-body">
            {/* <p className="card-text">{v.title}</p> */}
            <small className="text-primary ">RS {v.price}</small>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {response}
      {console.log(productsState.products)}
    </>
  );
};

export default ProductsCards;
