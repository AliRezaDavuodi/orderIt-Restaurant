import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  comments: [],
};

const comments = createSlice({
  name: "comments",
  initialState: INITIAL__STATE,
  reducers: {
    replceComments(state, action) {
      state.comments = [...action.payload];
    },
    addComment(state, action) {
      state.comments.push(action.payload);
    },
  },
});

export const commentsActions = comments.actions;

export default comments.reducer;
