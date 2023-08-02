import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modalSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    modalReducer,
    cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
