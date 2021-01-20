import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { ErrorBoundary } from "./component";
import IndexPage from "./pages/Index";
import { HttpService } from "./services/base.service";

function App() {
  const userReducer = useSelector((state: any) => state.userReducer);
  HttpService.setToken(userReducer.token);
  return (
    <>
      <ErrorBoundary>
        <IndexPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
