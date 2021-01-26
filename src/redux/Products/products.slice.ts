import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import { IproductsState } from "./types";

const initialState: IproductsState = {
  isLoading: false,
  products: [],
  product: {
    id: 0,
    description: "",
    title: "",
    price: 0,
    category: "",
    image: "",
  },
  test: true,
};

export const Products = createAsyncThunk(
  "products/all",
  async (data, thunkApi) => {
    try {
      const res: any = await productService.getProducts();
      return res.data.products;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("something wrong with api call: All Product")
      );
    }
  }
);

export const product = createAsyncThunk(
  "product",
  async (id: string, thunkApi) => {
    try {
      const res = await productService.getProduct(id);

      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in single products api: Single Product")
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
    [product.pending.toString()]: (state, action) => {
      state.isLoading = true;
    },
    [product.fulfilled.toString()]: (state, action) => {
      state.product.id = action.payload.id;
      state.product.image = action.payload.image;
      state.product.description = action.payload.description;
      state.product.title = action.payload.title;
      state.product.category = action.payload.category;
      state.product.price = action.payload.price;
      state.isLoading = false;
      state.test = false;
    },
    [product.rejected.toString()]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export default productsReducer.reducer;
