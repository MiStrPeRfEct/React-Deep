import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    // this is a state which is holding the data
    initialState:{
        count:0,
    },
    // here is the action which is used to update the state
    reducers:{
        increment:(state)=>{
            state.count++
        },//in this state points the initial state
        decrement:(state)=>{
            state.count--
        }

    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer