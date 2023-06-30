import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "../services/IngredientSlice";

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});
