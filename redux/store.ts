import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import cartReducer from "./features/cartSlice";
import sortingReducer from "./features/sortingSlice";

export const store = configureStore({
  reducer: {
    modalReducer,
    cartReducer,
    sortingReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
