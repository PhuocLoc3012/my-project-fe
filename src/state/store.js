import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Get the root state and dispatch types from the store
export const getState = store.getState
export const dispatch = store.dispatch