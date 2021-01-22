import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import { IallProductsState } from "../../interfaces";

const initialState: IallProductsState = {
  allProducts: [],
  isLoading: false,
};

export const allProducts = createAsyncThunk(
  "allproducts/all",
  async (data, thunkApi) => {
    try {
      const res: any = await productService.getAllProducts();

      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in hitting all products api")
      );
    }
  }
);

const AllProductsReducer = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: {
    [allProducts.pending.toString()]: (state) => {
      state.isLoading = true;
    },

    [allProducts.fulfilled.toString()]: (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = false;
    },

    [allProducts.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.paylaod);
    },
  },
});
export default AllProductsReducer.reducer;
