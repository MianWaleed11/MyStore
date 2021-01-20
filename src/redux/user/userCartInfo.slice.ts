import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userService } from "../../services/user.service";

interface IUserCartInfoState{
    cartInfo:any[];
    cart:any[],
    isLoading:boolean;
}

const initialState:IUserCartInfoState={
    cartInfo:[],
    cart:[],
    isLoading:false,
}



export const userCartInfo = createAsyncThunk(
  "userInfo/all",
  async (data, thunkApi) => {
    try {
      const res: any =await userService.getUserCartInfo();
      console.log(res);
      return res;
    } catch (err) {
      console.log(
        thunkApi.rejectWithValue("error in calling user cart info api")
      );
    }
  }
);


const userCartInfoReducer=createSlice(
    {
        name:'userCartInfo',
        initialState,
        reducers:{},
        extraReducers:{
            [userCartInfo.pending.toString()]:(state,)=>{
                    state.isLoading=true;
            },
            [userCartInfo.fulfilled.toString()]:(state,action)=>{
                state.cartInfo=action.payload.cartDetail;
                state.cart=action.payload.cart;
                state.isLoading=false;
            },
            [userCartInfo.rejected.toString()]:(state,action)=>{
                    state.isLoading=false;
                    console.log(action.payload);
            },
        }
    }
)
export default userCartInfoReducer.reducer;