import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LogInInterface } from "../../interfaces";
import { userService } from "../../services/user.service";
import { IloginUserState } from "./types";

const initialState: IloginUserState = {
  token: "",
  isLoading: false,
  isloggedIn: false,
  redirectPath: "/",
  name: "",
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (data: LogInInterface, thunkApi) => {
    try {
      const res = await userService.loginUser(data);
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("error in calling login user api"));
    }
  }
);

const userAuthReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      console.log("from action======>", action);
      state.token = action.payload;
      state.isloggedIn = true;
    },
    setLogout: (state, action) => {
      console.log("from action======>", action);
      state.token = "";
      state.isloggedIn = false;
      state.redirectPath = "/";
    },
    setPath: (state, action) => {
      console.log("from action======>", action);
      state.redirectPath = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.toString()]: (state, action) => {
      state.token = action.payload.token;
      state.isLoading = false;
      state.isloggedIn = true;
      state.name = action.payload.name;
    },
    [loginUser.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default userAuthReducer.reducer;
export const { setLogin, setLogout, setPath } = userAuthReducer.actions;
