import React, { useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import * as Actions from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import women_jacket from "../../assets/images/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg";
import men_jacket from "../../assets/images/jacket-men-s-jackets-men-s-jacket-winter-jackets (1)qwqwq.jpg";
import electrons from "../../assets/images/pexels-photo-450035.jpeg";
import jewelery from "../../assets/images/download.jpg";
import { Carosel } from "../../component";
import { ProductsCards } from "../../component";
import { useHistory } from "react-router-dom";
import "./home.css";
import commerece_pic from "../../assets/images/ecommerce-case-studies.png";
import character_pic from "../../assets/images/tyson-avatar.webp";
import {
  selectloading,
  selectProducts,
} from "../../redux/Products/products.selector";
import { Iproduct } from "../../interfaces";
import { selectCart } from "../../redux/cart/cart.selector";

let img: string;

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(Actions.Products());
  }, [dispatch]);

  //selectors here
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectloading);
  const cart = useSelector(selectCart);

  /**
   *
   * @param category
   * show products on other page and its categories
   */

  const showProducts = (category: string): void => {
    history.push(`/products/${category}`);
  };

  /**
   * filter the array and return the first element of category
   */

  const seen = new Set();

  const filteredArr = products.filter((el: any) => {
    const duplicate = seen.has(el.category);
    seen.add(el.category);
    return !duplicate;
  });

  const categories = filteredArr.map((product: Iproduct, i: number) => {
    if (product.category === "jewelery") {
      img = jewelery;
    } else if (product.category === "electronics") {
      img = electrons;
    } else if (product.category === "men clothing") {
      img = men_jacket;
    } else if (product.category === "women clothing") {
      img = women_jacket;
    }

    return (
      <div className="col-md-3 col-sm-10 mt-3 pb-3" key={i}>
        <ProductsCards
          category={product.category}
          image={img}
          showMore={() => showProducts(product.category)}
          showPrice={false}
        />
      </div>
    );
  });

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-content-center w-100 bg-danger">
        <Spinner variant="primary" animation="grow" className="spinner" />
      </div>
    );
  } else {
    //main return section;
    return (
      <>
        <Carosel />
        <Container style={{ backgroundColor: "#ebeeef" }} className="mt-5">
          <h5 className="text-capitalize text-dark pt-3 text-left">
            ALL CATEGORIES
          </h5>
          <Row>{categories}</Row>
        </Container>
        <div
          className="container mt-5 div_class"
          style={{ backgroundColor: "#ebeeef" }}
        >
          <div className="row  pt-5">
            <div className="col-md-6 col-sm-10 animate__animated animate__bounceInLeft pb-3">
              <h4 className="products_size">
                WE HAVE 2.3M PRODUCTS FROM ALL OUR THE WORLD
              </h4>
              <p className="quote mt-5">
                "Store took a lot of stress off of growing with minimal
                resources"
              </p>
              <div className="mt-3">
                <img
                  src={character_pic}
                  alt="character"
                  className="character_pic"
                />
                <small>Sajjid CEO and co-founder, store</small>
              </div>
            </div>
            <div className="col-md-6 col-sm-10 animate__animated animate__bounceInLeft pb-3">
              <img src={commerece_pic} alt="commercce" className="img-fluid" />
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
