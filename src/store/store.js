import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import favorite from "./favorite";

const store = configureStore({
  reducer: { cart: cart, like: favorite },
});

export default store;
