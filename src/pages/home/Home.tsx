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
import { Iproduct } from "../../interfaces";
import { selectProducts } from "../../redux/Products/products.selector";

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
  const products = useSelector(selectProducts);

  /**
   *
   * @param category
   * show products on other page and its categories
   */

  const show = (category: string | undefined) => {
    history.push(`/products/${category}`);
  };

  const seen = new Set();
  const filteredArr = products.filter((el: any) => {
    const duplicate = seen.has(el.category);
    seen.add(el.category);
    return !duplicate;
  });

  const categories = filteredArr.map((product: Iproduct, i: number) => {
    // product.
    if (product.category === "jewellery") {
      img = jewelery;
    } else if (product.category === "electronics") {
      img = electrons;
    } else if (product.category === "men clothing") {
      img = men_jacket;
    } else if (product.category === "women clothing") {
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
      <Container fluid style={{ backgroundColor: "#ebeeef" }} className="mt-5 ">
        <h3 className="text-capitalize text-dark pt-2 text-center">
          ALL CATEGORIES
        </h3>
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
