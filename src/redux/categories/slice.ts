import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
export const allCategories: any = createAsyncThunk("categories/all", async () => {
  try {
   const res:any=await productService.AllCategories();
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
      state.products = action.payload;
      state.isLoading=false;
    },
    [allCategories.rejected]:(state,action)=>{
      console.log(action.payload)
    }
  },
});

export default CategoriesReducer.reducer;
