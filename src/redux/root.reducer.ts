import {combineReducers} from '@reduxjs/toolkit';
import CategoriesReducer from './categories/slice'
import ProductsReducer from './Products/slice';

export const rootReducer=combineReducers({
CategoriesReducer,
ProductsReducer,

})