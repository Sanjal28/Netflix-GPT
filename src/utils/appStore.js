import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    // userReducer is nothing but userSlice.reducer
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
