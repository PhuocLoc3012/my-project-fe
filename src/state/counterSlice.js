import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0, // Ensure this is initialized
  };
  
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }


})


export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(()=> {
        dispatch(incrementByAmount(amount))
    }, 1000)
}
export const {increment, decrement, incrementByAmount} = counterSlice.actions
export default counterSlice.reducer