import { combineReducers } from "@reduxjs/toolkit";
import CategoriesReducer from "./categories/slice";
import ProductsReducer from "./Products/products.slice";
import userReducer from "./user/user.slice";
import AllProductsReducer from "./Products/allProducts.slice";
import productReducer  from './Products/product.slice';

export const rootReducer = combineReducers({
  CategoriesReducer,
  ProductsReducer,
  userReducer,
  AllProductsReducer,
  productReducer
});
