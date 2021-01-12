import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import * as Action from "../../redux/categories/slice";
import { useDispatch, useSelector } from "react-redux";
import women_jacket from "../../assets/images/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg";
import men_jacket from "../../assets/images/jacket-men-s-jackets-men-s-jacket-winter-jackets (1)qwqwq.jpg";
import electrons from "../../assets/images/pexels-photo-450035.jpeg";
import jewelery from "../../assets/images/download.jpg";
import Carosel from "../../component/carousel/Carosel";
import ProductsCards from "../../component/shared/productsCard/ProductsCard";
import { useHistory } from "react-router-dom";

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  let img: string;
  const history = useHistory();
  const dispatch = useDispatch();
  const productsState = useSelector((state: any) => state.CategoriesReducer);

  useEffect(() => {
    dispatch(Action.allCategories());
  }, [dispatch]);

  const show = (type: string): void => {
    history.push(`/products/category/${type}`);
  };

  const response = productsState.products.map((v: any, i: number) => {
    if (v === "jewelery") {
      img = jewelery;
    } else if (v === "electronics") {
      img = electrons;
    } else if (v === "men clothing") {
      img = men_jacket;
    } else {
      img = women_jacket;
    }
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
        <ProductsCards category={v} image={img} showMore={() => show(v)} />
      </div>
    );
  });

  return (
    <>
      <Carosel />
      {/* wraper */}
      <Container fluid style={{ backgroundColor: "#ebeeef" }} className="mt-5">
        <h3 className="text-capitalize text-dark pt-2 text-center">
          ALL CATEGORIES
        </h3>
        {/* <hr className /> */}

        <Row>{response}</Row>
      </Container>
    </>
  );
};

export default HomePage;
