import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    // userReducer is nothing but userSlice.reducer
    movies: moviesReducer,
  },
});

export default appStore;
