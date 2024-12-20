import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Password } from "../../../node_modules/@mui/icons-material/index";

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
    },
    extraReducer: {}
})

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({username, password}, {rejectWithValue})
)




export const { login, logout, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
