import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as Actions from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../../component/Modal/Modal";
import { selectLoggedIn } from "../../redux/user/user.selelector";
import axios from "axios";

export interface ProductDetailsProps {}
interface Iid {
  _id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    dispatch(Actions.getProductById(_id));
    dispatch(Actions.Products());
    console.log(productByIdReducer.product);
  }, []);

  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  let { _id } = useParams<Iid>();

  const isloggedIn = useSelector(selectLoggedIn);
  const productByIdReducer = useSelector(
    (state: any) => state.productByIdReducer
  );
  const productsReducer = useSelector((state: any) => state.ProductsReducer);

  const filteredArray = productsReducer.products.filter((v: any) => {
    return v.category === productByIdReducer.category;
  });

  const addCart = () => {
    if (isloggedIn === true) {
      dispatch(Actions.addToCart(_id));
      setshow(true);
    } else {
      dispatch(Actions.setPath(location.pathname));
      console.log(location.pathname);
      history.push("/login");
    }
  };

  console.log("images red", productByIdReducer.images);

  const handleClose = () => {
    setshow(false);
  };

  const redirecToCart = () => {
    history.push("/addtocart");
  };

  const response = productByIdReducer.product.map((v: any) => {
    return (
      <>
        <h6>{v.category}</h6>
        <p>{v.title}</p>
        <p>RS :{v.price}</p>
        <small>{v.description}</small>
        <br />
        <br />
        <button className="btn btn-outline-warning" onClick={addCart}>
          ADD TO CART
        </button>
      </>
    );
  }); 
  const imageRes = productByIdReducer.product.map((v: any) => {
    return (
      <>
         <img
                className="img-fluid"
                 src={v.images[0]}
                alt="Card cap"
                style={{ width: "374px", height: "374px" }}
              />
      </>
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
          <img src={v.images} alt="product" width="80px" height="56px" />
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
      <div>
        <Container fluid>
          <Row>
            <div className="col-md-4 col-sm-12">
              {imageRes}
              {/* <img
                className="img-fluid"
                //  src={productByIdReducer.product[0].images[0]}
                alt="Card cap"
                style={{ width: "374px", height: "374px" }} */}
              {/* /> */}
            </div>
            <div className="col-md-4 col-sm-12">{response}</div>
            <div>
              <div className="col-md-4 col-sm-12">
                <div
                  className="card text-dark"
                  style={{ width: "23rem", overflowY: "scroll" }}
                >
                  <div className="card-header">
                    Similar Products
                    {related}
                  </div>
                </div>
              </div>
            </div>
            <CartModal
              show={show}
              handleClose={handleClose}
              redirectToCart={redirecToCart}
              productImage="wqwqwqwqw"
            />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
