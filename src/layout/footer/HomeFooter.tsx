import React from "react";
import { Layout } from "antd";
import { List, Typography, Divider } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
export interface HomeFooterProps {}

const HomeFooter: React.FC<HomeFooterProps> = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer>
        <ol>
          <div>
            <li>Coffee</li>
          </div>
          <div>
            <li>Tea</li>
          </div>
          <div>
            <li>Milk</li>
          </div>
        </ol>
      </Footer>
    </div>
  );
};

export default HomeFooter;
