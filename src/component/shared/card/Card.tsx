import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from "axios";

const Cards: React.FC = () => {
  const [data, setdata] = useState<any[]>([]);
  const { Meta } = Card;

  const getAllProducts = async () => {
    try {
      const res: any = await axios.get(`https://fakestoreapi.com/products/`);
    //   console.log(res);
      setdata([...res.data]);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Card
      hoverable
      style={{ width: "240px" }}
      cover={
        <img
          alt="product_images"
           src={data[0].image}
        />
      }
    >
      <Meta title={data[0].title} description={data[0].description} />
    </Card>
  );
};

export default Cards;
