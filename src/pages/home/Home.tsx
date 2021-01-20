import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
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

let img: string;

const HomePage: React.FC = () => {
  /**
   * react hooks
   */

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.Products());
  }, []);

  /**
   * hooks
   */
  const history = useHistory();
  const ProductsReducer = useSelector((state: any) => state.ProductsReducer);

  /**
   *
   * @param category
   * show products on other page and its categories
   */

  const show = (category: string): void => {
    history.push(`/products/${category}`);
  };

  const seen = new Set();
  const filteredArr = ProductsReducer.products.filter((el: any) => {
    const duplicate = seen.has(el.category);
    seen.add(el.category);
    return !duplicate;
  });
  console.log(filteredArr);

  const categories = filteredArr.map((product: any, i: number) => {
    if (product.category === "jewelery") {
      img = jewelery;
    } else if (product.category === "electronics") {
      img = electrons;
    } else if (product.category === "men clothing") {
      img = men_jacket;
    } else {
      img = women_jacket;
    }
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={i}>
        <ProductsCards
          category={product.category}
          image={img}
          showMore={() => show(product.category)}
        />
      </div>
    );
  });

  return (
    <>
      <Carosel />
      {/* ------------------wraper--------------------------------- */}
      <Container fluid style={{ backgroundColor: "#ebeeef" }} className="mt-5 ">
        <h3 className="text-capitalize text-dark pt-2 text-center">
          ALL CATEGORIES
        </h3>
        {/* {console.log(categoriesState.isLoading)} */}
        {/* <hr className /> */}

        <Row>{categories}</Row>
      </Container>

      <div className="container mt-5 div_class">
        <div className="row  pt-5">
          <div className="col-md-6 col-sm-12 animate__animated animate__bounceInLeft">
            <h4 className="products_size">
              WE HAVE 2.3M PRODUCTS FROM ALL OUR THE WORLD
            </h4>
            <p className="quote mt-5">
              "Store took a lot of stress off of growing with minimal resources"
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
          <div className="col-md-6 col-sm-12 animate__animated animate__bounceInLeft">
            <img src={commerece_pic} alt="commercce" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
