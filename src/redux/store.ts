import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice"
import imageSlice from "./slice/apiSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        images:imageSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDisptch = typeof store.dispatch;