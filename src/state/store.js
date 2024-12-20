import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'
import counterSlice from './counterSlice'
export const store = configureStore({
  reducer: {
    auth: authSlice,
    counter: counterSlice
  },
})

// Get the root state and dispatch types from the store
// export const getState = store.getState
// export const dispatch = store.dispatch
export default store