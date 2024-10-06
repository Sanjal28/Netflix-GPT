import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer
    // userReducer is nothing but userSlice.reducer
  },
});

export default appStore;
