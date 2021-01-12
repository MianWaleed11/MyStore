import axios from "axios";
import { useDispatch } from "react-redux";
import { HttpService } from "../../services/base.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";

interface IproductsState {
  products: any[];
  isLoading: boolean;
  test: string;
}

const initialState: IproductsState = {
  products: [],
  isLoading: false,
  test: "awaw",
};

/**
 *
 */
export const allProducts = createAsyncThunk(
  "products/all",
  async (_, thunkApi) => {
    try {
      const res: any = await productService.getProducts();
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue("Something Went Worng!");
    }
  }
);

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [allProducts.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [allProducts.fulfilled.toString()]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [allProducts.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default productsReducer.reducer;
