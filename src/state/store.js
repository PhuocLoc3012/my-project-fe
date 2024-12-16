import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
})

// Get the root state and dispatch types from the store
export const getState = store.getState
export const dispatch = store.dispatch