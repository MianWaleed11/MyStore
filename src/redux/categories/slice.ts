import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import {IcategoriesState} from '../../interfaces'


const initialState: IcategoriesState = {
  categories: [],
  isLoading: false,

};


export const allCategories: any = createAsyncThunk("categories/all", async () => {
  try {
   const res:any=await productService.getAllCategories();
   return res.data;
  } catch (err) {
    console.log(err);
  }
});

const CategoriesReducer = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [allCategories.pending]: (state) => {
      state.isLoading = true;
    },
    [allCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.isLoading=false;
    },
    [allCategories.rejected]:(state,action)=>{
      console.log(action.payload)
    }
  },
});

export default CategoriesReducer.reducer
