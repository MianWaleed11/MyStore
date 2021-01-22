import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/user.service";
import { IUserCartInfoState } from "./types";

const initialState: IUserCartInfoState = {
  cartInfo: [],
  cart: [],
  isLoading: false,
};

export const userCartInfo = createAsyncThunk(
  "userInfo/all",
  async (data, thunkApi) => {
    try {
      const res: any = await userService.getUserCartInfo();
      console.log("cartInfo" + res);
      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling user cart info api")
      );
    }
  }
);
export const removeCartItem = createAsyncThunk(
  "removeCartItem/all",
  async (id: string, thunkApi) => {
    try {
      const res: any = await userService.removeFromCart(id);
      console.log("del" + res.data.cartInfo);
      return res.data;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling remove from cart info api")
      );
    }
  }
);

const userCartInfoReducer = createSlice({
  name: "userCartInfo",
  initialState,
  reducers: {},
  extraReducers: {
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
    [removeCartItem.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [removeCartItem.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [removeCartItem.fulfilled.toString()]: (state, action) => {
      state.cartInfo = action.payload.cartDetail;
      state.cart = action.payload.cart;
      state.isLoading = false;
    },
  },
});
export default userCartInfoReducer.reducer;
