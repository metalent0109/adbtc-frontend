import { configureStore } from "@reduxjs/toolkit";
import adsSlice from "./reducers/adsSlice";
import authSlice from "./reducers/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        ads: adsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch