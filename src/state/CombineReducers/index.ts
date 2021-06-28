import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "../reducers/login";
import { propriedades } from "../reducers/propriedades";

export const reducers = combineReducers({
    login: reducer,
    buscar: propriedades
})

export type stateInterface = ReturnType<typeof reducers>