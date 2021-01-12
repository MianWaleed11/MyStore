import {combineReducers} from '@reduxjs/toolkit';
import CategoriesReducer from './categories/slice'
import ProductsReducer from './products/slice';
import userReducer from "./user/user.slice";

export const rootReducer=combineReducers({
    CategoriesReducer,
    ProductsReducer,
    userReducer
})

