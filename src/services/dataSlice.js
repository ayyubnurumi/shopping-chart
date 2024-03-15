import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initialState = {
  items: data,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    incrementAmount: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.amount++;
      }
    },
    decrementAmount: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.amount > 0) {
        item.amount--;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },
  },
});

export const { incrementAmount, decrementAmount, removeItem } = dataSlice.actions;

export default dataSlice.reducer;
