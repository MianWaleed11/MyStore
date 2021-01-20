import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/Home";
import Layout from "../layout/index";
import Products from "../pages/Products/Products";
import RegisterPage from "../pages/register/Register";
import { NotFound } from "../component";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/productsDetails/ProductDetail";
import AddToCart from "../pages/cart/AddToCart";
import UploadProduct from "../pages/uploadProduct/UploadProduct";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  // test
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/uploadProduct" component={UploadProduct} />
        <Layout>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products/:category" component={Products} />

          <Route exact path="/productDetail/:_id" component={ProductDetails} />

          <Route exact path="/addtocart" component={AddToCart} />
        </Layout>
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
