import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Routes from "../routes/Routes";

export interface IndexPageProps {}
const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default IndexPage;
