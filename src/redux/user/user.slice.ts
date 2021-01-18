import { createSlice } from "@reduxjs/toolkit";

export interface userState {
  token: string;
  isLoading: boolean;
  isloggedIn: boolean;
  redirectPath: string;
}

const initialState: userState = {
  token: "",
  isLoading: false,
  isloggedIn: false,
  redirectPath: "/",
};
const userReducer = createSlice({
  name: "user",
  initialState: initialState,
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
