import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectIngredient, setIngredient } from "./IngredientSlice";

const SLICE = "burger";
const initialState = {
  burgerConstructor: {
    bun: {},
    fillings: [], // пихать каунты сюда
  },
  orderNumber: null,
};

export const constructorSlice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setBun: (state, action) => {
      state.burgerConstructor.bun = action.payload;
    },
    addFilling: (state, action) => {
      state.burgerConstructor.fillings = [
        ...state.burgerConstructor.fillings,
        action.payload,
      ];
    },
    removeFilling: (state, action) => {
      state.burgerConstructor.fillings =
        state.burgerConstructor.fillings.filter((item, index) => {
          return index !== action.payload;
        });
    },
  },
});

export const { setBun, addFilling, removeFilling } = constructorSlice.actions;

export const selectConstructorBuns = (state) => {
  return state[SLICE].burgerConstructor.bun;
};

export const selectConstructorIngredients = (state) => {
  return state[SLICE].burgerConstructor.fillings;
};

export default constructorSlice.reducer;
