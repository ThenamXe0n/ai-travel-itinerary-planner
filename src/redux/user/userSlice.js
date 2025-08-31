import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { meAPI } from "./userApi";

const initialState = {
  userDetails: null,
  isloggedIn: false,
};

export const meAsync = createAsyncThunk("me check", async () => {
  const response = await meAPI();
  return response;
});

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  },
  extraReducers: (builder) =>
    builder.addCase(meAsync.fulfilled, (state, action) => {
      if (action.payload.status) {
        state.isloggedIn = true;
        state.userDetails = action.payload.data;
      }
    }),
});

export default userSlice.reducer;
