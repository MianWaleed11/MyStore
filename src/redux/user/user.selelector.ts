import { createSelector } from '@reduxjs/toolkit'

const selectDomain =(state : any) =>state.userReducer

export const selectLoggedIn = createSelector(selectDomain,user => user.isloggedIn)
export const selectToken = createSelector(selectDomain,user => user.token)