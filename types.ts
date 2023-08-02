export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
}

export interface ProductResponse {
  products: Product[];
}

export interface SortItemValue {
  sort: string;
  order: string;
}

export interface SortFilterItem {
  id: number;
  name: string;
  value: SortItemValue;
}
