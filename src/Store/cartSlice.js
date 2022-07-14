import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      let alreadyExists = false;
      state.forEach((x) => {
        if (x.id === action.payload.id) {
          alreadyExists = true;
          x.count++;
        }
      });
      if (!alreadyExists) {
        state.push({ ...action.payload, count: 1 });
      }
    },
    remove(state, action) {
      return state.filter((x) => x.id !== action.payload);
    },
    decrement(state, action) {
      state.forEach((x) => {
        if (x.id === action.payload.id) {
          if (x.count > 1) {
            x.count--;
          }
        }
      });
    },
  },
});

export const { add, remove, decrement } = cartSlice.actions;
export default cartSlice.reducer;
