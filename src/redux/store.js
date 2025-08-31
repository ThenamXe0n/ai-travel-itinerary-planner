import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

export default store;
