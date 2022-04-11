import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    LOGIN(state, action) {
      state.user = action.payload;
    },
    LOGOUT(state) {
      state.user = "";
    },
    // ADD_JOURNAL(state, action) {
    //   state.user = { ...state, ...action.payload };
    // },
  },
});

export const { LOGIN, LOGOUT, ADD_JOURNAL } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
