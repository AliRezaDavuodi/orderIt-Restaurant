import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  token: "",
  expiresIn: 0,
};

const authentication = createSlice({
  name: "auth",
  initialState: INITIAL__STATE,
  reducers: {
    login(state, action) {
      // save information
      state.token = action.payload.token;

      // save token to the local storage
      localStorage.setItem("token", state.token);

      // set a settimeOut to clear up the localStorage after expires in time
    },
    logout(state) {
      // clear token variable
      state.token = "";

      // delete token from local storage
      localStorage.removeItem("token");
    },
  },
});

export const authActions = authentication.actions;

export default authentication.reducer;
