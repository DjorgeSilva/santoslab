import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "./CombineReducers";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)