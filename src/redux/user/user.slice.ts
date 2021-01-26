import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LogInInterface } from "../../interfaces";
import { userService } from "../../services/user.service";
import { IuserState } from "./types";

const initialState: IuserState = {
  isLoading: false,
  token: "",
  isloggedIn: false,
  redirectPath: "/",
  logginSuccess: true,
};

export const LogoutUser = createAsyncThunk(
  "user/logout",
  async (data, thunkApi) => {
    try {
      const res = await userService.logoutUser();
      console.log(res);
    } catch (err) {}
  }
);

/**
 * fetch login user info
 */

export const loginUser = createAsyncThunk(
  "user/login",
  async (data: LogInInterface, thunkApi) => {
    try {
      const res = await userService.loginUser(data);

      console.log("token", res.data);
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("error in calling login user api"));
    }
  }
);

const userReducer = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload;
      state.isloggedIn = true;
    },

    setPath: (state, action) => {
      state.redirectPath = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.toString()]: (state, action) => {
      if (action.payload.loginSuccess === false) {
        state.token = "";
        state.isLoading = false;
        state.isloggedIn = false;
      } else {
        state.token = action.payload.token;
        state.isLoading = false;
        state.isloggedIn = true;
      }
    },
    [loginUser.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },

    [LogoutUser.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [LogoutUser.fulfilled.toString()]: (state, action) => {
      state.token = "";
      state.isLoading = false;
      state.isloggedIn = false;
      state.redirectPath = "/";
    },
    [LogoutUser.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setLogin, setPath } = userReducer.actions;

export default userReducer.reducer;
