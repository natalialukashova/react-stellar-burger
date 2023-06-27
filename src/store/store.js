import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../services/BurgerSlice";

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});
