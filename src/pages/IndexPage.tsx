import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../layout/index";
import React from "react";
import Routes from "../routes/Routes";

export interface IndexPageProps {}
const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
};

export default IndexPage;
