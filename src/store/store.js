import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import favorite from "./favorite";
import randomFoods from "./foods";

const store = configureStore({
  reducer: { cart: cart, like: favorite, foods: randomFoods },
});

export default store;
