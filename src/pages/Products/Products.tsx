import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { ProductsCards } from "../../component";
import * as Actions from "../../redux";
import { productService } from "../../services/product.service";

export interface ProductsProps {}

interface Itype {
  type: string;
}

const Products: React.FC<ProductsProps> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const productsReducer = useSelector((state: any) => state.ProductsReducer);
  const allProductsReducer = useSelector(
    (state: any) => state.AllProductsReducer
  );
  let { type } = useParams<Itype>();

  useEffect(() => {
    dispatch(Actions.Products(type));
  }, []);

  const products = productsReducer.types.map((product: any, index: number) => {
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
        <ProductsCards
          category={product.category}
          image={product.image}
          title={product.title}
          price={product.price}
        />
      </div>
    );
  });

  const loadMoreHandler = () => {
    dispatch(Actions.allProducts());
  };

  const showdetails = () => {
    history.push("/products/details");
  };

  const allProducts = allProductsReducer.allProducts.map(
    (value: any, index: number) => {
      return (
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
          <ProductsCards
            showMore={showdetails}
            category={value.category}
            image={value.image}
            title={value.title}
            price={value.price}
          />
        </div>
      );
    }
  );

  return (
    <>
      <Container fluid>
        <h3 className="text-capitalize text-dark pt-2 text-center">{type}</h3>
        <Row>{products}</Row>
        <div className="text-center pt-5 d-block">
          <button
            className="btn btn-primary  btn-lg btn-block"
            onClick={loadMoreHandler}
          >
            SHOW ALL CATEGORIES
          </button>
        </div>
      </Container>
      <Container fluid>
        <Row>{allProducts}</Row>
      </Container>
    </>
  );
};

export default Products;
