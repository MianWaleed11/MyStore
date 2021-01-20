import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as Actions from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../../component/Modal/Modal";

import axios from "axios";
import { HttpService } from "../../services/base.service";

export interface ProductDetailsProps {}
interface Iid {
  _id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [show, setshow] = useState(false);
  // const [category, setCategory] = useState<string>("");
  const productByIdReducer = useSelector(
    (state: any) => state.productByIdReducer
  );
  const productsReducer = useSelector((state: any) => state.ProductsReducer);
  const addToCartReducer = useSelector((state: any) => state.addToCartReducer);
  const p = useSelector((state: any) => state.productReducer.product);
  const userReducer = useSelector((state: any) => state.userReducer);

  // let category:string="";
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { _id } = useParams<Iid>();

  const isloggedIn = useSelector((state: any) => {
    return state.userReducer.isloggedIn;
  });

  useEffect(() => {
    dispatch(Actions.getProductById(_id));
    dispatch(Actions.Products());
  }, []);



  const filteredArray = productsReducer.products.filter((v: any, i: number) => {
    return v.category === productByIdReducer.category;
  });
  console.log(filteredArray);

  console.log("from detai token", userReducer.token);

  // const addCart = () => {
  //   // setshow(true);
  //   if (isloggedIn === true) {
  //     Http1Service.setToken(userReducer.token);
  //     axios
  //       .get(`http://localhost:5000/api/users/login?productId=9&quantity=1`)
  //       // .then((res) => res.json())
  //       .then((res) => console.log(res));
  //     history.push("/addtocart");
  //   } else {
  //     dispatch(Actions.setPath(location.pathname));
  //     console.log(location.pathname);
  //     history.push("/login");
  //   }
  // };

  const addCart = () => {
    if (isloggedIn === true) {
    dispatch(Actions.addToCart(_id));
    setshow(true)
    }
    else{
      dispatch(Actions.setPath(location.pathname));
          console.log(location.pathname);
          history.push("/login");
        }
    }
        
        
  

  console.log("add to cart", addToCartReducer.data);

  const handleClose = () => {
    setshow(false);
  };

  const redirecToCart = () => {
    history.push("/addtocart");
  };

  const response = productByIdReducer.product.map((v: any, i: number) => {
    return (
      <div className="col-md-4 col-sm-12">
        <h6>{v.category}</h6>
        <p>{v.title}</p>
        <p>RS :{v.price}</p>
        <small>{v.description}</small>
        <br />
        <br />
        <button className="btn btn-outline-warning" onClick={addCart}>
          ADD TO CART
        </button>
      </div>
    );
  });

  const related = filteredArray.map((v: any, i: number) => {
    return (
      <div className="card-body" key={i}>
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
    <>
      {/* {productReducer.isLoading === true ? (
        <Spinner variant="danger" animation="grow" />
      ) : ( */}
      <Container fluid>
        <Row>
          {response}

          <div className="col-md-4 col-sm-12">
            <div
              className="card text-dark"
              style={{ width: "23rem", overflowY: "scroll" }}
            >
              <div className="card-header">
                Featured
                {related}
              </div>
            </div>
          </div>
          {/*             
            {console.log("rendering")}
            <div className="col-md-4 col-sm-12">
              <img
                src={productReducer.product.image}
                alt="productReducer.product"
                className="img-fluid"
                style={{ width: "374px", height: "374px" }}
              />
            </div>
          

            {/* {productReducer.isLoading === false && (
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
            )} */}

          {/*  */}

          <CartModal
            show={show}
            handleClose={handleClose}
            redirectToCart={redirecToCart}
            //  productImage={productByIdReducer.product.image}
            productImage="wqwqwqwqw"
          />
        </Row>
      </Container>
      {/* )} */}
    </>
  );
};

export default ProductDetails;
