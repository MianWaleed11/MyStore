import React from "react";
import { Button } from "antd";

export interface LoginButtonProps {}

const LoginButton: React.FC<LoginButtonProps> = () => {
  return (
    <div>
      <Button>Login</Button>
    </div>
  );
};

export default LoginButton;
