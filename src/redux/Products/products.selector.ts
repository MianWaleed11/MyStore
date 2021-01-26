import { createSelector } from '@reduxjs/toolkit'

const selectDomain =(state : any) =>state.productsReducer

export const selectProducts = createSelector(selectDomain,prod => prod.products)
export const selectProduct = createSelector(selectDomain,prod => prod.product)