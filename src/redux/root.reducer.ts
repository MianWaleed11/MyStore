import { combineReducers } from "@reduxjs/toolkit";
import CategoriesReducer from "./categories/slice";
import ProductsReducer from "./products/products.slice";
import userReducer from "./user/user.slice";
import AllProductsReducer from "./products/allProducts.slice";
import productReducer  from './products/product.slice';

export const rootReducer = combineReducers({
  CategoriesReducer,
  ProductsReducer,
  userReducer,
  AllProductsReducer,
  productReducer
});
