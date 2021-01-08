import React from "react";
import { Button, Radio } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export interface CartButtonProps {}

const CartButton: React.FC<CartButtonProps> = () => {
  return (
    <div>
      <Button
        type="primary"
        shape="round"
        icon={<ShoppingCartOutlined />}
       
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default CartButton;
