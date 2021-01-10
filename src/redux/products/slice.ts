import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HttpService } from "../../services/base.service";
import { productService } from "../../services/product.service";

interface IproductsState {
  products: any[];
  isLoading: boolean;
  test:string;
}

const initialState: IproductsState = {
  products: [],
  isLoading: false,
test:'awaw'
};

/**
 * 
 */
export const allProducts: any = createAsyncThunk("products/all", async () => {
  try {
   const res:any=await productService.getProducts();
   return res.data;
  } catch (err) {
    console.log(err);
  }
});

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [allProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [allProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.isLoading=false;
    },
    [allProducts.rejected]:(state,action)=>{
      console.log(action.payload)
    }
  },
});

export default productsReducer.reducer;
