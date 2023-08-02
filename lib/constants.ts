import { SortFilterItem } from "@/types";

export const defaultSort: SortFilterItem = {
  title: "Price: Low to high",
  slug: "price-asc",
  sortKey: "PRICE",
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];
