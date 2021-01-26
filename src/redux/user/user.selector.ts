import {createDraftSafeSelector} from '@reduxjs/toolkit'
import { IuserState } from './types';

const selectDomain=(state:any)=>state.userReducer;


export const selectToken=createDraftSafeSelector(selectDomain,(user:IuserState)=>user.token);
export const selectRedirectPath=createDraftSafeSelector(selectDomain,(user:IuserState)=>user.redirectPath);
export const selectIsLoggedIn=createDraftSafeSelector(selectDomain,(user:IuserState)=>user.isloggedIn);
