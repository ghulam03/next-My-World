import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser: (state) => {
      state.isAuth = true;
    },
    unAuthUser: (state) => {
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
export const { authUser, unAuthUser } = authSlice.actions;