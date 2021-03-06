import { createSlice } from "@reduxjs/toolkit";
import { notif } from "utilities/toast"

const INITIAL__STATE = {
  foods: [],
}

const cart = createSlice({
  name: "cart",
  initialState: INITIAL__STATE,
  reducers: {
    addItemToCart(state, action) {
      const exsitsItem = state.foods.find(food => food.id === action.payload.id)

      if (!exsitsItem) {
        // if food is new, push it to the foods
        state.foods.push({ ...action.payload, amount: 1 })

        return
      }
      // increase its amount by one
      exsitsItem.amount++
      notif("success", `'${action.payload.title}' added to your cart`, 3000)
    },
    deleteItemFromCart(state, action) {
      // filter the foods array
      state.foods = state.foods.filter(food => food.id !== action.payload.id)
      notif("error", `'${action.payload.title}' removed from your cart`, 3000)
    },
    increaseItem(state, action) {
      // find the item
      const item = state.foods.find(food => food.id === action.payload.id)
      // increase its amount by one
      item.amount++
    },
    decreaseItem(state, action) {
      // find item
      const item = state.foods.find(food => food.id === action.payload.id)
      // chcek its amount
      // if it's grather than one decrease it by one
      if (item.amount > 1) {
        item.amount--

        return
      }
      // if it's one delete it from cart
      state.foods = state.foods.filter(food => food.id !== action.payload.id)
      notif("error", `'${action.payload.title}' removed from your cart`, 3000)
    },
    replaceCartFoods(state, action) {
      state.foods = [...action.payload]
    },
  },
})

export const cartActions = cart.actions;

export default cart.reducer;
