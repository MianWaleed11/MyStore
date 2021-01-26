import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./Products/products.slice";
import userAuthReducer from "./user/loginUser.slice";
import AllProductsReducer from "./Products/allProducts.slice";
import productByIdReducer from "./Products/productById.slice";
import userCartInfoReducer from "./cart/userCartInfo.slice";

export const rootReducer = combineReducers({
  productsReducer,
  userAuthReducer,
  AllProductsReducer,
  productByIdReducer,
  userCartInfoReducer,
});
