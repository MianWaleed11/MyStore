import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import { IproductsState } from "../../interfaces";

const initialState: IproductsState = {
  isLoading: false,
  products: [],
};

export const Products = createAsyncThunk(
  "products/all",
  async (data, thunkApi) => {
    try {
      const res: any = await productService.getProducts();
      return res.data.products
      
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("something wrong with api call: All Product")
      );
    }
  }
);

const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [Products.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [Products.fulfilled.toString()]: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
    [Products.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default productsReducer.reducer;
