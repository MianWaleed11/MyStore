import React from "react";
import "./App.css";

import ErrorBoundary from "./component/errors/ErrorBoundary";
import IndexPage from "./pages/IndexPage";

import NavBar from "./layout/navBar/NavBar";

//I comment this to test

function App() {
  return (
    <>
      <ErrorBoundary>
        <IndexPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
