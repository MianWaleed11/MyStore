import React, { useEffect } from "react";
import { Container, Row, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as Actions from "../../redux";
import { useDispatch, useSelector } from "react-redux";

export interface ProductDetailsProps {}

interface Iid {
  id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const productReducer = useSelector((state: any) => state.productReducer);
  const productsReducer = useSelector((state: any) => state.ProductsReducer);
  const loading = useSelector((state: any) => state.ProductsReducer.isLoading);

  const dispatch = useDispatch();

  let { id } = useParams<Iid>();

  useEffect(() => {
    dispatch(Actions.product(id));
    dispatch(Actions.Products(productReducer.product.category));
  }, []);

  const response = productsReducer.types.map((v: any, i: number) => {
    return (
      <div className="card-body">
        <span
          className="product_image"
          style={{
            float: "left",
            backgroundColor: "red",
          }}
        >
          <img src={v.image} alt="product" width="80px" height="56px" />
        </span>
        <span
          className="product_details"
          style={{
            float: "right",
            border: "1px solid red",
            width: "190px",
            height: "56px",
          }}
        >
          <small>{v.title}</small>
        </span>
      </div>
    );
  });

  return (
    <Container fluid>
      <Row>
        {console.log("rendering")}
        <div className="col-md-4 col-sm-12">
          <img
            src={productReducer.product.image}
            alt="productReducer.product"
            className="img-fluid"
            style={{ width: "374px", height: "374px" }}
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <h6>{productReducer.product.category}</h6>
          <p>{productReducer.product.title}</p>
          <p>RS :{productReducer.product.price}</p>
          <small>{productReducer.product.description}</small>
          <br />
          <br />
          <button className="  btn btn-outline-warning">ADD TO CART</button>
        </div>
        <div className="col-md-4 col-sm-12">
          <div
            className="card text-dark"
            style={{ width: "23rem", overflowY: "scroll" }}
          >
            <div className="card-header">
              Featured
              {response}
            </div>
          </div>
        </div>

        {/*  */}
      </Row>
    </Container>
  );
};

export default ProductDetails;
