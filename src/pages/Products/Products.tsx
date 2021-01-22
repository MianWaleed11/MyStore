import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { ProductsCards } from "../../component";
import * as Actions from "../../redux";
import { productService } from "../../services/product.service";

export interface ProductsProps {}

interface Itype {
  category: string;
}

const Products: React.FC<ProductsProps> = () => {
  const [disabled, setdisabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const productsReducer = useSelector((state: any) => state.ProductsReducer);
  const allProductsReducer = useSelector(
    (state: any) => state.AllProductsReducer
  );
  let { category } = useParams<Itype>();

  useEffect(() => {
    dispatch(Actions.Products());
  }, []);

  const showdetails = (id: string) => {
    history.push(`/productDetail/${id}`);
  };

  const filteredProducts = productsReducer.products.filter(
    (product: any, index: number) => {
      return product.category === category;
    }
  );

  const products = filteredProducts.map((product: any, index: number) => {
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
        <ProductsCards
          showMore={() => showdetails(product._id)}
          category={product.category}
          image={product.images}
          title={product.title}
          price={product.price}
        />
      </div>
    );
  });

  const loadMoreHandler = () => {
    // dispatch(Actions.Products());
    setdisabled(true);
  };
  const allProducts = productsReducer.products.map(
    (value: any, index: number) => {
      return (
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
          <ProductsCards
            showMore={() => showdetails(value._id)}
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
        <h3 className="text-capitalize text-dark pt-2 text-center">
          {category}
        </h3>
        <Row>{products}</Row>
        <div className="text-center pt-5 d-block">
          <button
            className="btn btn-primary  btn-lg btn-block"
            onClick={loadMoreHandler}
            disabled={disabled}
          >
            SHOW ALL CATEGORIES
          </button>
        </div>
      </Container>
      <Container fluid>
        <Row>{disabled ? allProducts : null}</Row>
      </Container>
    </>
  );
};

export default Products;
