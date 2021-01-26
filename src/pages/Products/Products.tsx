import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { ProductsCards } from "../../component";
import * as Actions from "../../redux";
import { IcategoryfromUrl, Iproduct } from "../../interfaces";
import {
  selectloading,
  selectProducts,
} from "../../redux/Products/products.selector";
import CardSkeleton from "../../component/skeletons/CardSkeleton";

const Products: React.FC = () => {
  const [disabled, setdisabled] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();

  //useselecter here
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectloading);

  useEffect(() => {
    dispatch(Actions.Products());
  }, [dispatch]);

  let { category } = useParams<IcategoryfromUrl>();

  const showProductDetails = (id: string) => {
    history.push(`/productDetail/${id}`);
  };

  const loadMoreHandler = () => {
    setdisabled(true);
  };

  const filteredProducts = products.filter((product: Iproduct) => {
    return product.category === category;
  });

  const productsByCategory = filteredProducts.map(
    (product: Iproduct, index: number) => {
      return (
        <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
          <ProductsCards
            showMore={() => showProductDetails(product._id)}
            category={product.category}
            image={product.images[0]}
            title={product.title}
            price={product.price}
          />
        </div>
      );
    }
  );

  const allProducts = products.map((product: any, index: number) => {
    return (
      <div className="col-lg-3 col-md-3 col-sm-12 mt-3" key={index}>
        <ProductsCards
          showMore={() => showProductDetails(product._id)}
          category={product.category}
          image={product.images[0]}
          title={product.title}
          price={product.price}
        />
      </div>
    );
  });

  //main return section;
  return (
    <>
      <Container fluid>
        <h3 className="text-capitalize text-dark pt-2 text-center">
          {category}
          {console.log("from product", isLoading)}
        </h3>
        <Row>{productsByCategory}</Row>
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
