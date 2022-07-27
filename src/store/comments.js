import { createSlice } from "@reduxjs/toolkit";
import { notif } from "utilities/toast"

const INITIAL__STATE = {
  comments: [],
}

const comments = createSlice({
  name: "comments",
  initialState: INITIAL__STATE,
  reducers: {
    replceComments(state, action) {
      state.comments = [...action.payload]
    },
    addComment(state, action) {
      state.comments.push(action.payload)

      notif("success", "you added new comment.", 1000)
    },
  },
})

export const commentsActions = comments.actions;

export default comments.reducer;
