export interface IproductsState {
    types: any[];
  };


  export interface IcategoriesState {
    categories: any[];
    isLoading: boolean;
    
  }

  export interface IallProductsState{
    allProducts:any[],
    isLoading:boolean,
  }


interface Iproduct{
  id:number;
  title:string;
  description:string;
  price:number;
  category:string;
  image:string;
}

  export interface IproductState{
    product:Iproduct,
    isLoading:boolean;
    test:boolean
  }
