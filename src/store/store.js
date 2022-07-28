import { configureStore } from "@reduxjs/toolkit";

import cart from "./cart";
import favorite from "./favorite";
import randomFoods from "./foods";
import foodDetails from "./foodDetails";
import authentication from "./auth";
import comments from "./comments";

const store = configureStore({
  reducer: {
    cart: cart,
    like: favorite,
    foods: randomFoods,
    info: foodDetails,
    auth: authentication,
    comment: comments,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;
