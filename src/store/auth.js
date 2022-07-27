import { createSlice } from "@reduxjs/toolkit";
import { notif } from "utilities/toast"

const INITIAL__STATE = {
  token: "",
  expiresIn: 0,
}

const authentication = createSlice({
  name: "auth",
  initialState: INITIAL__STATE,
  reducers: {
    login(state, action) {
      // save information
      state.token = action.payload.token

      // save token to the local storage
      localStorage.setItem("token", state.token)
    },
    logout(state) {
      // clear token variable
      state.token = ""

      // delete token from local storage
      localStorage.removeItem("token")
    },
  },
})

export const authActions = authentication.actions;

export default authentication.reducer;
