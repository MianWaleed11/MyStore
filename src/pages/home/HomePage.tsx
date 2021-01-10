import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Carosel from "../../component/carousel/Carosel";
import ProductsCards from "../../component/shared/productsCard/ProductsCard";
import Footer from "../../layout/footer/Footer";
export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Carosel />
      {/* wraper */}
      <Container fluid style={{ backgroundColor: "#ebeeef" }} className="mt-5">
        <h3 className="text-capitalize text-dark pt-2 text-center">OUR CATEGORIES </h3>
        {/* <hr className /> */}
        <Row>
          <ProductsCards />
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default HomePage;
