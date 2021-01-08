import React from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const onSearch = (value: any) => console.log(value);

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        bordered={true}

        size="large"
      />
    </div>
  );
};

export default SearchBar;
