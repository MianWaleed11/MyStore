import { createSelector } from '@reduxjs/toolkit'

const selectDomain =(state : any) =>state.userAuthReducer

export const selectLoggedIn = createSelector(selectDomain,user => user.isloggedIn)
export const selectToken = createSelector(selectDomain,user => user.token)
export const selectName = createSelector(selectDomain,user => user.name)
export const selectRedirect = createSelector(selectDomain,user => user.redirectPath)