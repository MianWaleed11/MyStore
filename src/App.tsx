import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { ErrorBoundary } from "./component";
import IndexPage from "./pages/Index";
import { selectToken } from "./redux/user/user.selelector";
import { HttpService } from "./services/base.service";
import * as Actions from "./redux";
function App() {
  const token = useSelector(selectToken);
  HttpService.setToken(token);
  const data = useSelector((state:any)=> state.addToCartReducer.data)
  let dispatch = useDispatch();
  useEffect(() => {
    console.log(token);
    if (token.length > 0|| data.length) {
      dispatch(Actions.userCartInfo());
    }
  }, [data.length, dispatch, token, token.length]);
  return (
    <>
      <ErrorBoundary>
        <IndexPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
