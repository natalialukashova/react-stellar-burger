import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "../services/IngredientSlice";
import constructorReducer from "../services/ConstuctorSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burger: constructorReducer,
  },
});
