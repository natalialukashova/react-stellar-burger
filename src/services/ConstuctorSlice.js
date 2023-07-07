import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";

const SLICE = "burger";
const initialState = {
  burgerConstructor: {
    bun: {},
    fillings: [], // пихать каунты сюда
  },
  order: null,
};

export const sendOrder = createAsyncThunk(
  "order/fetchOrder",
  async (ingredients, { rejectWithValue }) => {
    try {
      const res = await api.getOrderDetails(ingredients);
      return res;
    } catch (err) {
      const { message } = err;
      rejectWithValue(message);
    }
  }
);

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
    clearOrder: (state) => ({ ...state, order: null }),
    setSwitchedFillings: (state, action) => ({ ...state, fillings: action.payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.fulfilled, (state, action) => {
      if (!action.payload) {
        return state;
      }
      return { ...state, order: action.payload };
    });
  },
});

export const { setBun, addFilling, removeFilling, clearOrder, setSwitchedFillings } = constructorSlice.actions;

export const selectConstructorBuns = (state) => {
  return state[SLICE].burgerConstructor.bun;
};

export const selectConstructorIngredients = (state) => {
  return state[SLICE].burgerConstructor.fillings;
};

export const selectOrder = (state) => {
  return state[SLICE].order;
};

export default constructorSlice.reducer;
