import { createSlice } from "@reduxjs/toolkit";
import { notif } from "utilities/toast"

const INITIAL__STATE = {
  likes: [],
}

const likes = createSlice({
  name: "favorite",
  initialState: INITIAL__STATE,
  reducers: {
    addItem(state, action) {
      state.likes.push({ ...action.payload })
      notif("success", `'${action.payload.title}' added to your favorite`, 6000)
    },
    deleteItem(state, action) {
      state.likes = state.likes.filter(food => food.id !== action.payload.id)
      notif(
        "error",
        `'${action.payload.title}' removed from your favorite`,
        6000
      )
    },
    replaceLikedFood(state, action) {
      state.likes = [...action.payload]
    },
  },
})

export const likeActions = likes.actions;

export default likes.reducer;
