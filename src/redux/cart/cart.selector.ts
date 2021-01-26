import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IcartState } from "./types";

const selectDomain=(state:any)=>state.cartReducer;


export const selectData=createDraftSafeSelector(selectDomain,(user:IcartState)=>user.data);
export const selectCart=createDraftSafeSelector(selectDomain,(user:IcartState)=>user.cart);
export const selectCartInfo=createDraftSafeSelector(selectDomain,(user:IcartState)=>user.cartInfo);