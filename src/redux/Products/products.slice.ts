import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import { IproductsState } from "../../interfaces";

const initialState: IproductsState = {
  types: [],
};

export const Products = createAsyncThunk(
  "products/all",
  async (query: string, thunkApi) => {
    try {
      const res: any = await productService.getProducts(query);
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("something wrong with api call"));
    }
  }
);

const ProductsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
 
  },
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
