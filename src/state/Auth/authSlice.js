import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null,
        loading: false,
        error: null
        
    },
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.accessToken = null;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const { login, logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
