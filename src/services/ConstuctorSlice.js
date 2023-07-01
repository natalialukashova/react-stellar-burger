import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SLICE = 'constructor';
const initialState = {
   constructor: {
      bun: [],
      fillings: [], // пихать каунты сюда
   },
   counts: {},
   totalPrice: 0,
}

export const ConstructorSlice = createSlice({
   name: SLICE,
   initialState,
   reducers: {}
});