import React from "react";
import "./App.css";

import {ErrorBoundary} from "./component";
import IndexPage from "./pages/Index";



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
