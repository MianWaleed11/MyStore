import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productService } from "../../services/product.service";

interface IproductsState {
  products: any[];
  status: string;
}

const initialState: IproductsState = {
  products: [],
  status: "",
};

 export  const allProducts: any = createAsyncThunk("products/allProducts", async () => {
  return productService.getProduct().then(res => res.json())
    // try{
    //     onst res:any = await productService.getProduct();
    //     console.log('ok');
    //     return res;
    // }catch(err){
    //      console.log(err);
    //  }
});

 const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers:{

  },
    extraReducers:{   
    [allProducts.pending]: (state, action) => {
      return (state.status = "loading");
    },
    [allProducts.rejected]:(state,action)=>{
        console.log(action)
        console.log('err')
    },
    [allProducts.fulfilled]: (state, action) => {
      console.log(action.payload)
       state.products = action.payload;
    },
    
  },
});



export default productsReducer.reducer;
