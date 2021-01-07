import { Layout, Menu, Breadcrumb } from "antd";
import React from "react";
export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            <Menu.Item key="4">nav 4</Menu.Item>
          </Menu>
        </Header>
      
      </Layout>
      ,
    </div>
  );
};

export default NavBar;
