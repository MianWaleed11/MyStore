import { Iproduct } from "../../interfaces";

export interface IproductsState {
    products: Iproduct[];
    isLoading:boolean;
    product:Iproduct[]
    category:string;
    image:string;
    query:string;
  };