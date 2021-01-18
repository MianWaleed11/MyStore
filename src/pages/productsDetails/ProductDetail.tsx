import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as Actions from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "../../component/Modal/Modal";

export interface ProductDetailsProps {}
interface Iid {
  id: string;
  category: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const [show, setshow] = useState(false);

  const productReducer = useSelector((state: any) => state.productReducer);
  const productsReducer = useSelector((state: any) => state.ProductsReducer);
  const p = useSelector((state: any) => state.productReducer.product);

  const dispatch = useDispatch();
  let histroy = useHistory();
  let location = useLocation();
  let { id, category } = useParams<Iid>();

  const isloggedIn = useSelector((state: any) => {
    return state.userReducer.isloggedIn;
  });
  useEffect(() => {
    dispatch(Actions.product(id));
  }, []);

  useEffect(() => {
    if (p.category) {
      dispatch(Actions.Products(productReducer.product.category));
    }
  }, [p]);

  const addCart = () => {
    // setshow(true);
    // isloggedIn?
       histroy.push("/addtocart")
    //   : histroy.push(`/login/:${location.pathname}`);
    console.log(location.pathname);
    //:  histroy.push("/login");
  };
  console.log("inside");
  const handleClose = () => {
    setshow(false);
  };

  const response = productsReducer.types.map((v: any, i: number) => {
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
      {productReducer.isLoading === true ? (
        <Spinner variant="danger" animation="grow" />
      ) : (
        <Container fluid>
          <Row>
            {/*  */}
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
              <button className="btn btn-outline-warning" onClick={addCart}>
                ADD TO CART
              </button>
            </div>

            {productReducer.isLoading === false && (
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
            )}

            {/*  */}

            <CartModal
              show={show}
              handleClose={handleClose}
              productImage={productReducer.product.image}
            />
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductDetails;
