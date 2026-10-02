import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice"
import cartreducer from "../features/cartSlice"

export const store = configureStore({
    reducer: {
        counter:counterReducer,
        cart:cartreducer

    }
})