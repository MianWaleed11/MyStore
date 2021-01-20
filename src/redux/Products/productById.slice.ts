import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IproductsState } from "../../interfaces";
import { productService } from "../../services/product.service";

interface IproductByIdState {
  product: any[];
  isLoading: boolean;
}

export const getProductById = createAsyncThunk(
  "productById",
  async (id:string, thunkApi) => {
    try {
      return await productService.getProductById(id);
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling product by id api")
      );
    }
  }
);

const initialState: IproductByIdState = {
  product: [],
  isLoading: false,
};

const productByIdReducer = createSlice({
  name: "productById",
  initialState,
  reducers: {},
  extraReducers: {
    [getProductById.pending.toString()]: (state, action) => {
      state.isLoading = true;
    },
    [getProductById.fulfilled.toString()]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    [getProductById.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.paylaod);
    },
  },
});


export default productByIdReducer.reducer;
