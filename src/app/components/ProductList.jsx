// import ProductCard from "./ProductCard";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import CartElement from "./CartElement";
import { TbShoppingCartPlus } from "react-icons/tb";

async function FetchProducts({ category, search }) {
  "use server";
  const url = category ? `https://dummyjson.com/products/category/${category}` : search ? `https://dummyjson.com/products/search?q=${search}` : "https://dummyjson.com/products?limit=0";
  const response = await fetch(url);
  const { products } = await response.json();
  return products.map((product) => <ProductCard key={product.id} id={product.id} thumbnail={product.thumbnail} title={product.title} price={product.price} category={product.category} discountPercentage={product.discountPercentage} reviewAmount={product.reviews.length} ratingTotal />);
}

function ProductCard({ key, id, thumbnail, title, price, category, discountPercentage, reviewAmount }) {
  return (
    <Link href={`/detalje/${id}`} key={key} className="rounded-4xl shadow-sm gap-2 grid grid-rows-auto">
      <figure className="grid">
        <Image src={thumbnail} loading="eager" alt="product image" width={800} height={800} className="col-1 row-1 rounded-t-4xl self-stretch object-cover aspect-square"></Image>
        <div className="col-1 row-1 justify-self-start p-3">
          {/* <p className="bg-black text-white text-xs py-1 px-2 rounded-xl m-1">New</p> */}
          <p className={`bg-red-600 text-white text-xs py-1 px-2 rounded-xl m-1 ${discountPercentage > 10 ? "block" : "hidden"}`}>Sale</p>
        </div>
      </figure>

      <div className="grid subgrid gap-2">
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm capitalize">{category}</p>
            <h1 className="text-md">{title}</h1>
            <p>
              $ {discountPercentage > 10 ? (price - (price * discountPercentage) / 100).toFixed(2) : price.toFixed(2)} <span className="line-through text-gray-400">{discountPercentage > 10 ? "$ " + price.toFixed(2) : ""}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <CartElement id={id} />
        </div>
      </div>
    </Link>
  );
}

export default function ProductList({ category, search }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-(--list-grid) justify-between gap-3 py-5 mt-20 px-10">
        <FetchProducts category={category} search={search} />
      </div>
    </Suspense>
  );
}
