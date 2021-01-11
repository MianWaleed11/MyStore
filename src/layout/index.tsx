import React from "react";
// import HomeFooter from "./footer/HomeFooter";
import NavBar from "./navBar/NavBar";
import Footer from './footer/Footer'
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
