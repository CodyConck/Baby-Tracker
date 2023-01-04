import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import babyService from "./babyService";

const initialState = {
  babies: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const babySlice = createSlice({
  name: "baby",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = babySlice.actions;
export default babySlice.reducer;
