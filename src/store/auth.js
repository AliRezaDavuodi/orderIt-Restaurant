import { createSlice } from "@reduxjs/toolkit";
import { notif } from "utilities/toast"

const INITIAL__STATE = {
  token: "",
  expiresIn: 0,
  isAuth: false,
}

const authentication = createSlice({
  name: "auth",
  initialState: INITIAL__STATE,
  reducers: {
    login(state, action) {
      state.isAuth = true
      state.token = action.payload.accessToken
    },

    logout(state) {
      state.isAuth = false
      state.token = ""
      notif("success", "you logged out successfully", 1500)
    },
  },
})

export const authActions = authentication.actions;

export default authentication.reducer;
