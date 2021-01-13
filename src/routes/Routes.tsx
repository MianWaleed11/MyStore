import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/Home";
import Layout from "../layout/index";
import Products from "../pages/Products/Products";
import RegisterPage from "../pages/register/Register";
import NotFound from "../component/errors/NotFound";
import Login from "../pages/login/Login";
export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  // test
  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterPage} />
        <Layout>
          <Route exact path="/products/category/:type" component={Products} />
          <Route exact path="/" component={HomePage} />
        </Layout>
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
