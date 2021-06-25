import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "../reducers/login";

export const reducers = combineReducers({
    login: reducer
})

export type stateInterface = ReturnType<typeof reducers>