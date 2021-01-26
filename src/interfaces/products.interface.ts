
  export interface IcategoriesState {
    categories: any[];
    isLoading: boolean|undefined;
    
  }

  export interface IallProductsState{
    allProducts:any[],
    isLoading:boolean,
  }


export interface Iproduct{
  id:number;
  title:string;
  description:string;
  price:number;
  category:string;
  image:string;
}

  export interface IproductState{
    product:Iproduct,
    test:boolean
    isLoading:boolean;
  }
