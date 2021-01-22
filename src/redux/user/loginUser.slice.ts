import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { LogInInterface } from "../../interfaces";
import { HttpService } from "../../services/base.service";
import { userService } from "../../services/user.service";

interface IloginUserState {
  token: string;
  isLoading: boolean;
  isloggedIn: boolean;
  redirectPath: string;
  name: string;
}

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

const userReducer = createSlice({
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
      HttpService.setToken(action.payload);
    },
    [loginUser.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});
// interface userState {
//   products: ILoginData[];
//   isLoading: boolean;
// }

// const initialState: userState = {
//   products: [],
//   isLoading: false,
// };

// export const userThunk = createAsyncThunk(
//   "createUser",
//   async (data: ILoginData, thunkApi) => {
//     try {
//       const res: any = await userService.createUser(data);
//       return res.data;
//     } catch (err) {
//         console.log(err.message)
//       return thunkApi.rejectWithValue("Something Went Worng!");
//     }
//   }
// );

// const userReducer = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [userThunk.pending.toString()]: (state) => {
//       state.isLoading = true;
//     },
//     [userThunk.fulfilled.toString()]: (state, action) => {
//       state.products = action.payload;
//       state.isLoading = false;
//     },
//     [userThunk.rejected.toString()]: (state, action) => {
//       console.log(action.payload);
//     },
//   },
// });
export default userReducer.reducer;
export const { setLogin, setLogout, setPath } = userReducer.actions;
