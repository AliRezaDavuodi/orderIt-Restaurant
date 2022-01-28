import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  info: {
    id: null,
    image: null,
    title: null,
    description: null,
  },
};

const foodDetail = createSlice({
  name: "info",
  initialState: INITIAL__STATE,
  reducers: {
    replaceFoodInfo(state, action) {
      const { id, description, title, image } = action.payload;
      state.info.description = description;
      state.info.id = id;
      state.info.image = image;
      state.info.title = title;
    },
  },
});

export const foodInfoActions = foodDetail.actions;

export default foodDetail.reducer;
