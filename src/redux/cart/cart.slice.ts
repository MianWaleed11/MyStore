import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { user1Service } from "../../services/user1.service";

interface userState {
  data: any[];
  isLoading: boolean;
}

const initialState: userState = {
  data : [],
  isLoading: false,
};

export const AddToCart = createAsyncThunk(
  "addtocart",
  async (data, thunkApi) => {
    try {
      const res: any = await user1Service;
      console.log(res.data);
      return res;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("error in hitting all cart api"));
    }
  }
);

const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    [AddToCart.pending.toString()]: (state) => {
      state.isLoading = true;
    },

    [AddToCart.fulfilled.toString()]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      
    },

    [AddToCart.rejected.toString()]: (state, action) => {
      state.isLoading = false;
      console.log(action.paylaod);
    },
  },
});

export default cartReducer.reducer;
// export const { setLogin,setLogout } = userReducer.actions;
