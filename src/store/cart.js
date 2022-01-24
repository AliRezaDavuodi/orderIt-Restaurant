import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  foods: [],
};

const cart = createSlice({
  name: "cart",
  initialState: INITIAL__STATE,
  reducers: {
    addItemToCart(state, action) {
      // chcek if food is already in cart

      const exsitsItem = state.foods.find(
        (food) => (food.id = action.payload.id)
      );

      // find the item's index
      const exsitsItemIndex = state.foods.indexOf(exsitsItem);

      if (exsitsItemIndex !== -1) {
        // increase it's amount by one
        exsitsItem.amount++;

        return;
      }
      // if food is new, push it to the foods
      state.foods.push({ ...action.payload, amount: 1 });
    },
    deleteItemFromCart(state, action) {
      // filter the foods array
      state.foods = state.foods.filter((food) => food.id !== action.payload.id);
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
