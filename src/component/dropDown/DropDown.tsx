import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

export interface DropDownProps {}

const DropDown: React.FC<DropDownProps> = () => {
  const [dropDownValue, setDropDownValue] = useState<string>("Location");

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a onClick={() => setDropDownValue("Lahore")}>Lahore</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={() => setDropDownValue("Karachi")}>Karachi</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <a onClick={() => setDropDownValue("Islamabad")}>Islamabad</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {dropDownValue} <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default DropDown;
