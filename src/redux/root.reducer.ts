import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./Products/products.slice";
import userReducer from "./user/user.slice";
import cartReducer from './cart/cart.slice';
export const rootReducer = combineReducers({
  productsReducer,
  userReducer,
  cartReducer
});
