import { createSelector } from '@reduxjs/toolkit'

const selectDomain =(state : any) =>state.userCartInfoReducer

export const selectCart = createSelector(selectDomain,user => user.cart)
export const selectCartInfo = createSelector(selectDomain,user => user.cartInfo)
export const selectData = createSelector(selectDomain,user => user.data)

