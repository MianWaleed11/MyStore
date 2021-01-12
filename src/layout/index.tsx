import React from "react";
import Footer from "./footer/Footer";
// import HomeFooter from "./footer/HomeFooter";
import NavBar from "./navBar/NavBar";
export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
      <Footer/> 
    </>
  );
};

export default Layout;
