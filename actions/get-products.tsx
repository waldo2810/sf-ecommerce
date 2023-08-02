import { Product } from "@/types";
import qs from "query-string";

const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/data`;

interface Query {
  sort?: string | null;
  order?: string | null;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  console.log("sort", query.sort);
  console.log("order", query.order);

  const url = qs.stringifyUrl({
    url: endpoint,
    query: {
      _sort: query.sort || undefined,
      _order: query.order || undefined,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
