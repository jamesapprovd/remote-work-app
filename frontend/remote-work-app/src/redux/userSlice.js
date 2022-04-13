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
      const filteredJournals = state.workJournal.filter(
        (journal) => journal.journalId !== action.payload
      );
      state.workJournal = filteredJournals;
    },

    EDIT_JOURNAL: (state, action) => {
      const index = state.workJournal.findIndex(
        (journal) => journal.journalId === action.payload.journalId
      );
      console.log(action.payload);
      state.workJournal[index].title = action.payload.update.title;
      state.workJournal[index].content = action.payload.update.content;
    },

    ADD_FLAG: (state, action) => {
      const newFlag = {
        whiteFlagId: action.payload.whiteFlagId,
        date: action.payload.date,
        time: action.payload.time,
        title: action.payload.title,
        content: action.payload.content,
        isSolved: action.payload.isSolved,
        comments: action.payload.comments,
      };
      state.whiteFlag.push(newFlag);
    },

    // tried to add all journals data but not very sure how to do it
    // ALL_JOURNALS(state, action) {
    //   state.allJournals = action.payload;
    // },

    EDIT_FLAG: (state, action) => {
      const index = state.whiteFlag.findIndex(
        (flag) => flag.whiteFlagId === action.payload.whiteFlagId
      );
      console.log(action.payload);
      state.whiteFlag[index].title = action.payload.editedWhiteFlag.title;
      state.whiteFlag[index].content = action.payload.editedWhiteFlag.content;
    },

    REMOVE_FLAG: (state, action) => {
      const filteredFlags = state.whiteFlag.filter(
        (flag) => flag.whiteFlagId !== action.payload
      );
      state.whiteFlag = filteredFlags;
    },

    NEW_COMMENT: (state, action) => {
      const newComment = action.payload.newComment;
      const journalIndex = state.workJournal.findIndex(
        (journal) => journal.journalId === action.payload.selectedJournalId
      );
      state.workJournal[journalIndex].comments.push(newComment);
    },

    DEL_COMMENT: (state, action) => {
      const journalIndex = state.workJournal.findIndex(
        (journal) => journal.journalId === action.payload.selectedJournalId
      );
      const filteredComments = state.workJournal[journalIndex].comments.filter(
        (comment) => comment.commentId !== action.payload.commentId
      );
      state.workJournal[journalIndex].comments = filteredComments;
    },
  },
});

export const {
  LOGIN,
  LOGOUT,
  ADD_JOURNAL,
  REMOVE_JOURNAL,
  EDIT_JOURNAL,
  ADD_FLAG,
  REMOVE_FLAG,
  EDIT_FLAG,
  // ALL_JOURNALS,
  NEW_COMMENT,
  DEL_COMMENT,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectWorkJournal = (state) => state.user.workJournal;
export const selectWhiteFlag = (state) => state.user.whiteFlag;

export default userSlice.reducer;
