import { SortFilterItem } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SortingSLice = {
  params: SortFilterItem;
};

const initialState = {
  params: { id: 1, name: "Price: Low to High", value: { sort: "price" } },
} as SortingSLice;

export const sorting = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    reset: () => initialState,
    setParams: (state, action: PayloadAction<SortFilterItem>) => {
      state.params = action.payload;
    },
  },
});

export const { setParams, reset } = sorting.actions;
export default sorting.reducer;
