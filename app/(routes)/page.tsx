"use client";

import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Sorting from "@/components/ui/sort";
import { useAppSelector } from "@/redux/hooks";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

const HomePage = async () => {
  const params = useAppSelector((state) => state.sortingReducer.params);

  const products = await getProducts({
    sort: params.value?.sort,
    order: params.value?.order,
  });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Sorting />
          <ProductList title="All products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
