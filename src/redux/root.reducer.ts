import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from './products/slice'

export const rootReducer=combineReducers({
productsReducer,
})