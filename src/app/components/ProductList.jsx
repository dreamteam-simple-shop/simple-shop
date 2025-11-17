// import ProductCard from "./ProductCard";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { TbShoppingCartPlus } from "react-icons/tb";

async function FetchProducts() {
  "use server";
  const response = await fetch("https://dummyjson.com/products");
  const { products } = await response.json();
  return products.map((product) => <ProductCard key={product.id} thumbnail={product.thumbnail} title={product.title} price={product.price} category={product.category} discountPercentage={product.discountPercentage} />);
}

function ProductCard({ thumbnail, title, price, category, discountPercentage }) {
  return (
    <Link href="/detalje" className="rounded-4xl shadow-sm">
      <div>
        <figure className="grid">
          <Image src={thumbnail} loading="eager" alt="product image" width={800} height={800} className="col-1 row-1 rounded-t-4xl self-stretch object-cover aspect-square"></Image>
          <div className="col-1 row-1 justify-self-start p-3">
            {/* <p className="bg-black text-white text-xs py-1 px-2 rounded-xl m-1">New</p> */}
            <p className={`bg-red-600 text-white text-xs py-1 px-2 rounded-xl m-1 ${discountPercentage < 10 ? "block" : "hidden"}`}>Sale</p>
          </div>
        </figure>
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm capitalize">{category}</p>
            <h1 className="text-md">{title}</h1>
            <p>
              $ {discountPercentage < 10 ? price - ((price * discountPercentage) / 100).toFixed(0) : price}{" "}
              <span
                className="line-through text-gray-400
           "
              >
                {" "}
                {discountPercentage < 10 ? "$ " + price : ""}
              </span>
            </p>
          </div>
          <TbShoppingCartPlus size={20} />
        </div>
      </div>
    </Link>
  );
}

export default function ProductList() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-(--list-grid) justify-between gap-3 py-5 mt-20 px-10">
        <FetchProducts />
      </div>
    </Suspense>
  );
}
