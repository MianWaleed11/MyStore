import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ErrorBoundary } from "./component";
import IndexPage from "./pages/Index";
import { HttpService } from "./services/base.service";
import { selectToken } from "./redux/user/user.selector";
import * as Actions from "./redux";
import { selectData } from "./redux/cart/cart.selector";

function App() {
  const token = useSelector(selectToken);
  const data = useSelector(selectData);
  HttpService.setToken(token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== "" || data.length || token !== undefined) {
      dispatch(Actions.userCartInfo());
    }
  }, [data.length, dispatch, token]);

  return (
    <>
      <ErrorBoundary>
        <IndexPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
