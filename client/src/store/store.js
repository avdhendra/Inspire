import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage";
import authReducer from '../state/index'

const persistConfig = { key: 'root', storage, version: 1 }
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
     let middleware= getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
     })
        if (process.env.NODE_ENV !== 'production') {
            middleware=middleware.concat(logger)
        }
        return middleware
    }
})