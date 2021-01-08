import { Layout, Menu } from "antd";
import React from "react";
import store_pic from "../../assets/images/store_logo.png";
import DropDown from "../../component/dropDown/DropDown";
import CartButton from "../../component/cartButton/CartButton";
import SearchBar from "../../component/search/SearchBar";
import LoginButton from "../../component/loginButton/LoginButton";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const { Header } = Layout;

  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              {
                <img
                  src={store_pic}
                  width="50px"
                  height="50px"
                  alt="store_pic"
                />
              }
            </Menu.Item>
            <Menu.Item key="2">{<DropDown />}</Menu.Item>
            <Menu.Item key="3">{<SearchBar />}</Menu.Item>
            <Menu.Item key="4">{<LoginButton />}</Menu.Item>
            <Menu.Item key="5">{<CartButton />}</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default NavBar;
