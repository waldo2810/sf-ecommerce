import Image from "next/image";
import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import { Suspense } from "react";
import Loading from "./loading";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const allProducts = await getProducts({});

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <Suspense fallback={<Loading />}>
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                priority
              />
            </Suspense>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="More of us:" items={allProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
