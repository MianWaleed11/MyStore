import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import * as Action from "../../redux/categories/slice";
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
  useEffect(() => {
    dispatch(Action.allCategories());
  }, []);

  /**
   * hooks
   */
  const history = useHistory();
  const dispatch = useDispatch();
  const categoriesState = useSelector((state: any) => state.CategoriesReducer);

  /**
   *
   * @param type
   * show products on other page and its categories
   */

  const show = (type: string): void => {
    history.push(`/products/${type}`);
  };

  const categories = categoriesState.categories.map(
    (category: any, i: number) => {
      if (category === "jewelery") {
        img = jewelery;
      } else if (category === "electronics") {
        img = electrons;
      } else if (category === "men clothing") {
        img = men_jacket;
      } else {
        img = women_jacket;
      }
      return (
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={i}>
          <ProductsCards
            category={category}
            image={img}
            showMore={() => show(category)}
          />
        </div>
      );
    }
  );

  return (
    <>
      <Carosel />
      {/* wraper */}
      <Container fluid style={{ backgroundColor: "#ebeeef" }} className="mt-5 ">
        <h3 className="text-capitalize text-dark pt-2 text-center">
          ALL CATEGORIES
        </h3>
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
