import formReducer from "./form/form-redus";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import contactsReducer from './phoneBook/phoneBook-reduce';

const middleware = [...getDefaultMiddleware(), logger]
const store = configureStore({
    reducer: {
    form: formReducer,
    contacts: contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export default store