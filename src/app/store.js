import { configureStore } from "@reduxjs/toolkit";
import itrReducer from "../Features/itrSlice";

export const store = configureStore({
    reducer: {
        itr: itrReducer
    }
})

