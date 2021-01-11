import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import ProductsCards from "../../component/shared/productsCard/ProductsCard";
import NavBar from "../../layout/navBar/NavBar";
import * as Actions from "../../redux/Products/slice";

export interface ProductsProps {}

interface Itype {
  type: string;
}

const Products: React.FC<ProductsProps> = () => {
  const dispatch = useDispatch();
  const productsReducer = useSelector((state: any) => state.ProductsReducer);
  let { type } = useParams<Itype>();

  useEffect(() => {
    dispatch(Actions.Products(type));
  }, []);

  const response = productsReducer.types.map((v: any, i: number) => {
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3">
        <ProductsCards category={v.category} image={v.image}  title={v.title} price={v.price}  />
      </div>
    );
  });

  return (
    <Container fluid>
      <h3 className="text-capitalize text-dark pt-2 text-center">{type}</h3>
      <Row>
        {response}
      </Row>
    </Container>
  );
};

export default Products;
