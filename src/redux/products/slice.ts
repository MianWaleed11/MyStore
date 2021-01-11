import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";

interface IinitialState {
  types: any[];
}

const initialState: IinitialState = {
  types: [],
};

export const Products = createAsyncThunk(
  "products/all",
  async (query: string, thunkApi) => {
    try {
      const res: any = await productService.Products(query);
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("something wrong with api call"));
    }
  }
);

const ProductsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [Products.pending.toString()]: (state) => {
      console.log("pending");
    },
    [Products.fulfilled.toString()]: (state, action) => {
      state.types = action.payload;
    },
    [Products.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default ProductsReducer.reducer;
