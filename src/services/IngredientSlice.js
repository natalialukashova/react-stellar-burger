import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";

const SLICE = "ingredients";
const initialState = {
  ingredients: [],
  status: false,
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
    // setConstuctor: (state, action) => {
    //   state.constructor = action.payload.items;
    //   state.total = action.payload.total;
    // },
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

export const { setIngredient } = ingredientSlice.actions;

export const selectIngredients = (state) => ({
  items: state[SLICE].ingredients,
  loading: state[SLICE].status === "loading",
});

export const selectIngredient = (id) => (state) => {
  return state[SLICE].ingredients.filter((item) => item.id === id).pop();
};

export default ingredientSlice.reducer;