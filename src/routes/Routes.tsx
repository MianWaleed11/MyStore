import React from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from '../pages/home/HomePage';

export interface RoutesProps {
    
}
 
const Routes: React.FC<RoutesProps> = () => {
    return (
        <>
          <Switch>
           
            <Route exact path="/" component={HomePage} />
          </Switch>
        </>
      );
}
 
export default Routes;