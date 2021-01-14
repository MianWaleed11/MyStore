import { combineReducers } from "@reduxjs/toolkit";
import CategoriesReducer from "./categories/slice";
<<<<<<< HEAD
import ProductsReducer from "./products/products.slice";
=======
import ProductsReducer from "./products/slice";
>>>>>>> 385ba3c6a8f0f41ea46568eb952300ddf8bd42f4
import userReducer from "./user/user.slice";
import AllProductsReducer from "./products/allProducts.slice";
import productReducer  from './products/product.slice';

export const rootReducer = combineReducers({
  CategoriesReducer,
  ProductsReducer,
  userReducer,
<<<<<<< HEAD
  AllProductsReducer,
  productReducer
=======
>>>>>>> 385ba3c6a8f0f41ea46568eb952300ddf8bd42f4
});
