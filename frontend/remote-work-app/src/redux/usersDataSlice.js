import { createSlice } from "@reduxjs/toolkit";

export const usersDataSlice = createSlice({
  name: "usersData",
  initialState: {
    users: [],
  },
  reducers: {
    STORE_DATA(state, action) {
      state.users = action.payload;
    },

    LOGOUT_DATA(state, action) {
      state.users = [];
    },
  },
});

export const { STORE_DATA } = usersDataSlice.actions;

export const selectUsersData = (state) => state.usersData.users;

export default usersDataSlice.reducer;
