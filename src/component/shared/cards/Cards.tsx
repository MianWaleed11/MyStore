import React, { useEffect } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "../../../redux/products/slice";
import { productService } from "../../../services/product.service";

const { Meta } = Card;

export interface CARDProps {}

const Cards: React.FC<CARDProps> = () => {

  const dispatch = useDispatch();
 const pstate=useSelector((state:any)=>state.productsReducer)

  useEffect(() => {
 dispatch(Action.allProducts())
  }, []);

  const getProducts =async() =>{
   try {
     let res:any=  await productService.getProduct()
     console.log(res)
     
   } catch (error) {
     
   }
  }
  return (
    <p>hello</p>
    
    // <Card
    //   hoverable
    //   style={{ width: 240 }}
    //   cover={
    //     <img
    //       alt="example"
    //       src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    //     />
    //   }
    // >
    //   <Meta title="Europe Street beat" description="www.instagram.com" />
    // </Card>
  );
};

export default Cards;
