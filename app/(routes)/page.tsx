import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Sorting from "@/components/ui/sort";
import { ProductResponse } from "@/types";

export const metadata = {
  title: "Search",
  description: "Search for products in the store.",
};

const HomePage = async () => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  // const data: ProductResponse = await res.json();
  // const { products } = data;

  const products = await getProducts({ sort: "price", order: "desc" });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Sorting />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="All products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
