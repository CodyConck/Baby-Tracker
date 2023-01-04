import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import babyReducer from "../features/babies/babySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    babies: babyReducer,
  },
});
