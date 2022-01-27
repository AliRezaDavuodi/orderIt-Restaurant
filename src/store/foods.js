import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  allFoods: [],
};

const randomFoods = createSlice({
  name: "randomFoods",
  initialState: INITIAL__STATE,
  reducers: {
    replaceFoods(state, action) {
      state.allFoods = [...action.payload];
    },
  },
});

export const foodsActions = randomFoods.actions;

export default randomFoods.reducer;
