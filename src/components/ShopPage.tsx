import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import Filters from "./Filters";
import type { Product } from "../types/types";

export const ShopPage = () => {
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        const { products } = data;
        setProducts(products);
      });
  }, []);

  return (
    <>
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-center">List of products</h2>
      </div>
      <Filters />
      <section className="relativeflex flex-col items-center justify-center max-w-[1200px] mx-auto">
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]
"
        >
          {products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};
