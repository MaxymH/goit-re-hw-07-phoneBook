
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import contactsReducer from './phoneBook/phoneBook-reduce';
import {phoneBookReducer}  from './phoneBook/phoneBook-reduce';

const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
    reducer: {
    contacts: contactsReducer,phoneBookReducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export default store