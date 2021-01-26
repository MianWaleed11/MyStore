export interface IproductsState {
    products: any[];
    isLoading:boolean;
    product:Iproduct,
    test:boolean
    
  };

  interface Iproduct{
    id:number;
    title:string;
    description:string;
    price:number;
    category:string;
    image:string;
  }