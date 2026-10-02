import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cartItems: null,
    },

    reducers:{
        addToCart:(state, action)=>{
            state.cartItems = action.payload;
        },
        removeFromCart:(state, action)=>{

        }
    }
})
export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;