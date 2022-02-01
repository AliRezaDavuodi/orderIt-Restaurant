import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  likes: [],
};

const likes = createSlice({
  name: "favorite",
  initialState: INITIAL__STATE,
  reducers: {
    addItem(state, action) {
      state.likes.push({ ...action.payload });
    },
    deleteItem(state, action) {
      state.likes = state.likes.filter((food) => food.id !== action.payload.id);
    },
    replaceLikedFood(state, action) {
      state.likes = [...action.payload];
    },
  },
});

export const likeActions = likes.actions;

export default likes.reducer;
