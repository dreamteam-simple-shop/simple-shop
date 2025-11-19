"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import CartElement from "./CartElement";
import Cart from "./CartElement";

export default function ProductSingle({ title, thumbnail, category, description, discountPercentage, price, reviewAmount, key, id }) {
  const [isQuant, setIsQuant] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className=" px-10  grid md:grid-cols-2 sm:grid-cols-1 gap-12">
      <div className="md:col-1 ">
        <figure className="grid justify-stretch self-center pt-5 shadow-sm rounded-4xl h-full">
          <Image src={thumbnail} loading="eager" alt="cat" width={500} height={500} className="col-1 row-1  object-cover aspect-square "></Image>
          <div className="col-1 row-1 justify-self-start p-3">
            {/* <p className="bg-black text-white py-1 px-2 rounded-xl m-1">New</p> */}
            <p className={`bg-red-600 text-white py-1 px-2 rounded-xl m-1 ${discountPercentage > 10 ? "block" : "hidden"}`}>Sale</p>
          </div>
        </figure>
        
      </div>
      <div className=" md:col-2 grid grid-rows-[auto_1fr] md:min-h-screen gap-5">
        <div>
          <div className=" grid gap-2 pb-4">
            <p className=" text-gray-400 pt-5 capitalize">{category}</p>
            <h1 className="text-xl">{title}</h1>
            <div className="flex gap-2 items-center">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <p className="text-gray-500">{reviewAmount} (reviews)</p>
            </div>
            <div className="flex gap-5 items-center">
              <h2 className="text-4xl">$ {discountPercentage > 10 ? (price - (price * discountPercentage) / 100).toFixed(2) : price.toFixed(2)} </h2>
              <h2 className={`text-2xl text-gray-400 line-through ${discountPercentage > 10 ? "block" : "hidden"}`}>$ {price.toFixed(2)}</h2>
              <p className={`bg-red-600 text-white py-1 px-3 rounded-xl ${discountPercentage > 10 ? "block" : "hidden"}`}>{discountPercentage.toFixed(0)}% OFF</p>
            </div>
          </div>

          <hr className="text-gray-400" />
          <h3 className="text-xl py-4">Description</h3>
          <p className="text-gray-600 md:pe-5">{description}</p>
          <h3 className="text-xl py-4">Select size</h3>
          <div className="inline-grid grid-cols-3 gap-3">
            {sizes.map((size) => (
              <button key={size} onClick={() => setSelectedSize(size)} className={selectedSize === size ? "bg-black text-white w-15 h-15 rounded-2xl " : "border border-black w-15 h-15 rounded-2xl  hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="self-start">
          <h3 className="text-xl py-4">Select colors</h3>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-400"></div>
            <div className="w-10 h-10 rounded-full bg-black"></div>
            <div className="w-10 h-10 rounded-full bg-sky-800"></div>
            <div className="w-10 h-10 rounded-full bg-green-800"></div>
          </div>
          <h3 className="text-xl py-4">Quantity</h3>
          <div className="flex border border-gray-400 rounded-xl w-30 justify-center  items-center p-5 justify-self-start">
            <button
              onClick={() => {
                if (isQuant > 0) setIsQuant(isQuant - 1);
              }}
            >
              <p>-</p>
            </button>
            <input type="number" className="w-14 text-center p-1" value={isQuant} min={0} onChange={(e) => setIsQuant(Math.max(0, Number(e.target.value)))} />
            <button
              onClick={() => {
                setIsQuant(isQuant + 1);
              }}
            >
              <p> +</p>
            </button>
          </div>
          <CartElement id={id} />
        </div>
      </div>
    </div>
  );
}
