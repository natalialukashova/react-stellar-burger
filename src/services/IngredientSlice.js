import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";

const SLICE = "ingredients";
const initialState = {
  ingredients: [],
  status: false,
  selectedIngredient: null,
};

export const loadIngredients = createAsyncThunk(
  "burger/fetchBurger",
  async () => {
    const response = await api.getIngredients();
    return response.data;
  }
);

export const ingredientSlice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setIngredient: (state, action) => {
      state.ingredients = state.ingredients.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    clickedIngredient: (state, action) => ({
      ...state,
      selectedIngredient: action.payload,
    }),
    clearIngredient: (state) => ({ ...state, selectedIngredient: null }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadIngredients.fulfilled, (state, action) => {
        state.status = "idle";
        state.ingredients = action.payload;
      });
  },
});

export const { setIngredient, clickedIngredient, clearIngredient } = ingredientSlice.actions;

export const selectIngredients = (state) => ({
  items: state[SLICE].ingredients,
  loading: state[SLICE].status === "loading",
});

export const selectIngredient = (id) => (state) => {
  return state[SLICE].ingredients.filter((item) => item.id === id).pop();
};

export const selectedIngredient = (state) => {
  return state[SLICE].selectedIngredient;
};

export default ingredientSlice.reducer;
