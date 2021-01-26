import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
import * as Actions from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetail.css";
import CartModal from "../../component/Modal/Modal";
import { IidFromUrl, Iproduct } from "../../interfaces";
import {
  selectCategory,
  selectProduct,
  selectProducts,
} from "../../redux/Products/products.selector";
import { selectIsLoggedIn } from "../../redux/user/user.selector";
import Swal from "sweetalert2";
import Carousel from "react-elastic-carousel";
import { ProductsCards } from "../../component";

const ProductDetails: React.FC = () => {
  const [show, setshow] = useState<boolean>(false);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  //useSelectors
  const products = useSelector(selectProducts);
  const category = useSelector(selectCategory);
  const isloggedIn = useSelector(selectIsLoggedIn);
  const product = useSelector(selectProduct);

  //id from url
  let { _id } = useParams<IidFromUrl>();

  useEffect(() => {
    dispatch(Actions.getProductById(_id));
    dispatch(Actions.Products());
  }, [_id, dispatch]);
  const image = useSelector((state: any) => {
    return state.productsReducer.image;
  });

  const filteredArray = products.filter((v: any, i: number) => {
    return v.category === category;
  });

  const addCart = () => {
    if (isloggedIn === true) {
      dispatch(Actions.addToCart(_id));
      Swal.fire({
        title: "product info",
        titleText: "Added To Cart",
        imageUrl: image,
        imageHeight: 100,
        imageWidth: 100,
        icon: "success",
        confirmButtonText: "View Cart",
        showCancelButton: true,
        cancelButtonText: "Shop More",
      }).then((result) => {
        if (result.isConfirmed) {
          history.push("/addtocart");
        }
      });
    } else {
      Swal.fire({
        title: "product info",
        titleText: "You Have To Login In To Access this Service",
        icon: "info",
        confirmButtonText: "Login",
        showCancelButton: true,
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(Actions.setPath(location.pathname));
          console.log(location.pathname);
          history.push("/login");
        }
      });
    }
  };

  const handleClose = () => {
    setshow(false);
  };

  const redirecToCart = () => {
    history.push("/addtocart");
  };

  const img = useSelector((state: any) => {
    return state.productsReducer.image;
  });

  const productById = product.map((product: Iproduct, index: number) => {
    return (
      <div className="col-md-6 col-sm-10" key={index}>
        <h4 className="text-info text-capitalize">{product.title}</h4>
        <hr />
        <div className="product_info">
          <div className="product_keys">
            <p>Category</p>
            <p>Rs</p>
            <p>Available</p>
            <p>Rating</p>
          
          </div>
          <div className="product_values text-secondary">
          <p>{product.category}</p>
        <p>{product.price}</p>
        <p>Yes</p>
        <p>4</p>
      
          </div>
        </div>

        <hr/>
       <h5 className='text-info'>About Product</h5>
       <small>{product.description}</small>
        <br />
        <br />
        <button className="btn btn-outline-warning" onClick={addCart}>
          ADD TO CART
        </button>
      </div>
    );
  });

  const imageResponse = product.map((product: Iproduct, index: number) => {
    return (
      <img
        src={product.images[0]}
        alt="productImage"
        key={index}
        className="img-fluid  product_Detail_img"
      />
    );
  });

  const relatedProducts = filteredArray.map(
    (product: Iproduct, index: number) => {
      return (
        <ProductsCards
          image={product.images[0]}
          title={product.title}
          price={product.price}
          showPrice={true}
          category={product.category}
        />
      );
    }
  );

  //main return section;
  return (
    <>
      <Container>
        <Row>
          <div className="col-md-6 col-sm-10">{imageResponse}</div>
          {productById}
        </Row>
      </Container>
      <Container className="mt-5">
        <h3>Related Products</h3>
        <Row>
          <div className="col-md-12 col-sm-10">
            <Carousel
              breakPoints={breakPoints}
              itemsToShow={4}
              isRTL={true}
              enableAutoPlay={true}
            >
              {relatedProducts}
            </Carousel>
          </div>
        </Row>
      </Container>
      {/* )} */}
    </>
  );
};

export default ProductDetails;
