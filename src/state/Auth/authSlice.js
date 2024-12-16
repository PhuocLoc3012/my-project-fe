import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: null,
    },
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload;
        },
        logout: (state) => {
            state.accessToken = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
