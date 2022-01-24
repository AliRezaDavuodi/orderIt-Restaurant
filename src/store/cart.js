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
        // increase its amount by one
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
    increaseItem(state, action) {
      // find the item
      const item = state.foods.find((food) => food.id === action.payload.id);
      // increase its amount by one
      item.amount++;
    },
    decreaseItem(state, action) {
      // find item
      const item = state.foods.find((food) => food.id === action.payload.id);
      // chcek its amount
      // if it's grather than one decrease it by one
      if (item.amount > 1) {
        item.amount--;

        return;
      }
      // if it's one delete it from cart
      state.foods = state.foods.filter((food) => food.id !== action.payload.id);
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
