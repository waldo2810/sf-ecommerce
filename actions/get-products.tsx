import { Product } from "@/types";
import qs from "query-string";

const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/data`;

interface Query {
  sort?: string;
  order?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
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
