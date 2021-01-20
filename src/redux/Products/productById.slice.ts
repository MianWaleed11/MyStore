import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IproductsState } from "../../interfaces";
import { productService } from "../../services/product.service";

interface IproductByIdState {
  product: any[];
  isLoading: boolean;
  category: any;
}

export const getProductById = createAsyncThunk(
  "productById",
  async (id: string, thunkApi) => {
    try {
      const res: any = await productService.getProductById(id);
      return res.data;
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
  category: "",
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
      state.category = action.payload[0].category;
    },
    [getProductById.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.paylaod);
    },
  },
});

export default productByIdReducer.reducer;
