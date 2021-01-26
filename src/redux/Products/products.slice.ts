import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import { IproductsState } from "./types";

const initialState: IproductsState = {
  isLoading: true,
  products: [],
  product: [],
  category: "",
  image:'',
  query:'',


};

export const Products = createAsyncThunk(
  "products/all",
  async (data, thunkApi) => {
    try {
      const res: any = await productService.getProducts();
      console.log('all products',res);
      return res.data.products
      
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("something wrong with api call: All Product")
      );
    }
  }
);


export const getProductById = createAsyncThunk(
  "productById",
  async (id: string, thunkApi) => {
    try {
      const res: any = await productService.getProductById(id);
      console.log('productbyId',res);
      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling product by id api")
      );
    }
  }
);


const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    setChangeHandler:(state,action)=>{
      state.query=action.payload
    },
    setValue:(state,action)=>{
      state.query=action.payload
    }
  },
  extraReducers: {
    [Products.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [Products.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.image=action.payload[0].images[0]
     
    },
    [Products.rejected.toString()]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;

    },
    [getProductById.pending.toString()]: (state, action) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.category = action.payload[0].category;
      state.image=action.payload[0].images[0]
    },
    [getProductById.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.paylaod);
    },
  },
});

export default productsReducer.reducer;
export const {setChangeHandler,setValue}=productsReducer.actions;