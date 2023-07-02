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
    console.log(response.data);
    // return response.map((item) => {
    //   Object.assign({}, item, {
    //     counter: 0,
    //   });
    // });
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

// export const selectConstructor = (state) => ({
//   items: state[SLICE].constructor,
//   total: state[SLICE].total,
// });

// export const addToConstructor = (id) => (dispatch, getState) => {
//   const ingredient = selectIngredient(id)(getState());
//   if (!ingredient) return;

//   const constructor = selectConstructor(getState());
//   dispatch(
//     setIngredient(
//       Object.assign({}, ingredient, {
//         counter: ingredient.counter + 1,
//       })
//     )
//   );

//   const items = new Set([...constructor.items, ingredient.id]);
//   dispatch(
//     setConstuctor({
//       items: [...items.values()],
//       total: constructor.total + ingredient.price,
//     })
//   );
// };

// export const removeFromConstructor = (id) => (dispatch, getState) => {
//   const ingredient = selectIngredient(id)(getState());
//   if (!ingredient) return;

//   const constructor = selectConstructor(getState());
//   if (constructor.items.includes(ingredient.id)) {
//     dispatch(
//       setIngredient(
//         Object.assign({}, ingredient, {
//           counter: ingredient.counter - 1,
//         })
//       )
//     );

//     const items = new Set([...constructor.items]);
//     if (ingredient.counter === 1) {
//       items.delete(ingredient.id);
//     }
//     dispatch(
//       setConstuctor({
//         items: [...items.values()],
//         total: constructor.total - ingredient.price,
//       })
//     );
//   }
// };

export default ingredientSlice.reducer;