import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/login/RegisterPage";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Layout>
          <Route exact path="/" component={HomePage} />
        </Layout>
      </Switch>
    </>
  );
};

export default Routes;
