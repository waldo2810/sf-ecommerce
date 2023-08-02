import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState = {
  items: Product[];
};

const initialState = {
  items: [],
} as CartState;

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addItem(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cart.actions;
export default cart.reducer;
