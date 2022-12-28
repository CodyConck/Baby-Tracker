import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  // if theres a user, use that, otherwise set null
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // reset function to reset the state to default values
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
