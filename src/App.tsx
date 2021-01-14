import React from "react";
import "./App.css";
import {ErrorBoundary} from "./component";
import IndexPage from "./pages/IndexPage";



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
