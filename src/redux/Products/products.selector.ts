import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IproductsState } from "./types";

const selectDomain=(state:any)=>state.productsReducer;

export const selectProducts=createDraftSafeSelector(selectDomain,(state:IproductsState)=>state.products)
export const selectCategory=createDraftSafeSelector(selectDomain,(state:IproductsState)=>state.category)
export const selectProduct=createDraftSafeSelector(selectDomain,(state:IproductsState)=>state.product)
export const selectloading=createDraftSafeSelector(selectDomain,(state:IproductsState)=>state.isLoading)
export const selectquery=createDraftSafeSelector(selectDomain,(state:IproductsState)=>state.query)