import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HttpService } from "../../services/base.service";
import { userService } from "../../services/user.service";

interface IaddToCartState {
  data: any[];
  isLoading: boolean;

}

const initialState: IaddToCartState = {
  data: [],
  isLoading: false,
 
};

export const addToCart = createAsyncThunk(
  "addToCart/add",
  async (id:string, thunkApi) => {
    try {  
      const res = await userService.addToCart(id);
       console.log('test res data',res.data)     ;
      return res.data;
    } catch (err) {
      console.log(thunkApi.rejectWithValue("error in calling add to cart api"));
    }
  }
);

const addToCartReducer = createSlice({
  name: "addToCart",
  initialState,
  reducers: {},
  extraReducers: {
    [addToCart.pending.toString()]: (state, action) => {
      state.isLoading = true;
    },
    [addToCart.fulfilled.toString()]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
     
    },
    [addToCart.rejected.toString()]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
    },
  },
});

export default addToCartReducer.reducer;
