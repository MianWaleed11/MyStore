import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData } from "../../interfaces";
import { userService } from "../../services/user.service";
import { IuserState } from "../../interfaces";

const initialState: IuserState = {
  users: [],
  isLoading: false,
};

export const userThunk = createAsyncThunk(
  "createUser",
  async (data: ILoginData, thunkApi) => {
    try {
      const res: any = await userService.createUser(data);
      return res.data;
    } catch (err) {
      console.log(err.message);
      return thunkApi.rejectWithValue("Something Went Worng!");
    }
  }
);

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [userThunk.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [userThunk.fulfilled.toString()]: (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    [userThunk.rejected.toString()]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default userReducer.reducer;
