import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./products/slice";
import userReducer from "./user/user.slice";

export const rootReducer = combineReducers({
  productsReducer,
  userReducer,
});
