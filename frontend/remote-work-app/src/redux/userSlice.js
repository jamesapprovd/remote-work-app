import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    workJournal: null,
    whiteFlag: null,
  },
  reducers: {
    LOGIN(state, action) {
      state.user = action.payload;
      state.workJournal = action.payload.workJournal;
      state.whiteFlag = action.payload.whiteFlag;
    },
    LOGOUT(state) {
      state.user = "";
      state.workJournal = "";
      state.whiteFlag = "";
    },
    ADD_JOURNAL: (state, action) => {
      const newJournal = {
        journalId: action.payload.journalId,
        date: action.payload.date,
        time: action.payload.time,
        title: action.payload.title,
        content: action.payload.content,
        comments: action.payload.comments,
      };
      state.workJournal.push(newJournal);
    },
    REMOVE_JOURNAL: (state, action) => {
      state.filter((journal) => journal.journalId !== action.payload.journalId);
    },
  },
});

export const { LOGIN, LOGOUT, ADD_JOURNAL, REMOVE_JOURNAL } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectWorkJournal = (state) => state.user.workJournal;
export const selectWhiteFlag = (state) => state.user.whiteFlag;

export default userSlice.reducer;
