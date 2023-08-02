import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
  data?: Product;
};

const initialState = {
  isOpen: false,
  data: undefined,
} as ModalState;

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    reset: () => initialState,
    onOpen: (state, action: PayloadAction<Product>) => {
      (state.isOpen = true), (state.data = action.payload);
    },
    onClose: (state) => {
      state.isOpen = false;
      state.data = undefined;
    },
  },
});

export const { onOpen, onClose, reset } = modal.actions;
export default modal.reducer;
