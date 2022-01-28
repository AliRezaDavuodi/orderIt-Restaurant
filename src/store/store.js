import { configureStore } from "@reduxjs/toolkit";

import cart from "./cart";
import favorite from "./favorite";
import randomFoods from "./foods";
import foodDetails from "./foodDetails";

const store = configureStore({
  reducer: {
    cart: cart,
    like: favorite,
    foods: randomFoods,
    info: foodDetails,
  },
});

export default store;
