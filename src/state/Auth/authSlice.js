import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "api/services/authService";
import userApi from "api/services/userService";

const handlePending = (state, action) => {
  state.loading = true;
};
const handleFulfilled = (state, action) => {
  state.loading = false; 
  state.error = null; // Ensure error is reset on success
};
const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload.Message;
};
export const userLogin = createAsyncThunk(
    "auth/login",
    async ({ username, password }, { rejectWithValue }) => {
      try {
        const response = await authApi.login(username, password);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  export const currentUser = createAsyncThunk(
    "auth/current",
    async (_, { rejectWithValue }) => {
      try {
        const response = await userApi.currentUser();
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    accessToken: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, handlePending);
    builder.addCase(userLogin.fulfilled, (state, action) => {
      handleFulfilled(state, action);
      state.accessToken = action.payload.token.accessToken;
    });
    builder.addCase(userLogin.rejected, handleRejected);
  },
});


export const {} = authSlice.actions;
export default authSlice.reducer;
