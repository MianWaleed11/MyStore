import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productService } from "../../services/product.service";
import { IproductState } from "../../interfaces";

const initialState: IproductState = {
  product: {
    id: 0,
    description: "",
    title: "",
    price: 0,
    category: "",
    image: "",
  },
  isLoading: false,
};

export const product = createAsyncThunk(
  "product",
  async (id: string, thunkApi) => {
    try {
      const res = await productService.getProduct(id);
    
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("error in single products api"));
    }
  }
);

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: {
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

    },
    [product.rejected.toString()]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export default productReducer.reducer;
