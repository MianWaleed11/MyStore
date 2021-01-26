import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/user.service";
import { IcartState } from "./types";

const initialState: IcartState = {
  isLoading: false,
  cart: [],
  cartInfo: [],
  data: [],
};

/**
 * fetch user cart info
 */

export const userCartInfo = createAsyncThunk(
  "userInfo/all",
  async (data, thunkApi) => {
    try {
      const res: any = await userService.getUserCartInfo();
      console.log("usercartninf this is working=>", res);
      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling user cart info api")
      );
    }
  }
);

/**
 * fetch removed item from cart
 */

export const removeFromCart = createAsyncThunk(
  "removeFromCart/all",
  async (_id: string, thunkApi) => {
    try {
      const res: any = await userService.removeFromCart(_id);
      console.log("del", res);
      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling remove from  cart  api")
      );
    }
  }
);

/**
 * fetch user add to cart info
 */

export const addToCart = createAsyncThunk(
  "addToCart/add",
  async (id: string, thunkApi) => {
    try {
      
      const res = await userService.addToCart(id);
      console.log("test res data", res.data);
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("error in calling add to cart api"));
    }
  }
);

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [removeFromCart.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [removeFromCart.fulfilled.toString()]: (state, action) => {
      state.cartInfo = action.payload.cartDetail;
      state.cart = action.payload.cart;
      state.isLoading = false;
    },
    [removeFromCart.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [userCartInfo.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [userCartInfo.fulfilled.toString()]: (state, action) => {
      state.cartInfo = action.payload.cartDetail;
      state.cart = action.payload.cart;
      state.isLoading = false;
    },
    [userCartInfo.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [addToCart.pending.toString()]: (state, action) => {
      state.isLoading = true;
    },
    [addToCart.fulfilled.toString()]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      console.log("state cart", state.data);
    },
    [addToCart.rejected.toString()]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export default cartReducer.reducer;
