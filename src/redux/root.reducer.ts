import { combineReducers } from "@reduxjs/toolkit";
import CategoriesReducer from "./categories/slice";
import productsReducer from "./Products/products.slice";
import userReducer from "./user/user.slice";
import AllProductsReducer from "./Products/allProducts.slice";
import productReducer  from './Products/product.slice';
import cartReducer from './cart/cart.slice';
import productByIdReducer from './Products/productById.slice';


export const rootReducer = combineReducers({
  CategoriesReducer,
  ProductsReducer: productsReducer,
  userReducer,
  AllProductsReducer,
  productReducer,
  cartReducer,
  productByIdReducer

});
