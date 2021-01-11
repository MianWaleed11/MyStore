import React from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from '../pages/home/Home';
import Layout from "../layout/index";
import Products from '../pages/Products/Products';
export interface RoutesProps {
    
}
 
const Routes: React.FC<RoutesProps> = () => {
    return (
        <>
          <Switch>
            <Layout>
            <Route  exact path='/products/category/:type' component={Products} />
            <Route exact path="/" component={HomePage} />
            </Layout>
          </Switch>
        </>
      );
}
 
export default Routes;