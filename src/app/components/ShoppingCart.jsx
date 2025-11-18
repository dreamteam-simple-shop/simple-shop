"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import FetchShoppingCart from "./FetchShoppingCart";

function DarkOverlay({ isOpen, setIsOpen }) {
  return <div className={`fixed top-0 left-0 w-screen h-screen bg-black z-40 transition-opacity duration-900 ease-in-out ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}></div>;
}

function CartItems({ isOpen, setIsOpen }) {
  return (
    <div className={`fixed top-0 right-0 min-w-[400px] w-1/3 h-screen bg-white z-50 p-4 flex flex-col gap-5 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
      <div className="flex flex-row w-full justify-between items-center self-start">
        <h1 className="text-xl font-semibold">Shopping Cart (0)</h1>
        <button className="flex flex-row gap-2 cursor-pointer" onClick={() => setIsOpen(false)}>
          <IoClose className="text-gray-500" />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center self-center w-full h-full">
        <FetchShoppingCart />
        <FiShoppingBag className="text-gray-300 h-16 w-16" />
        <h2 className="text-md ">Your cart is empty</h2>
        <p className="text-gray-500">Add some products to get started!</p>
        <button className="bg-black text-white p-2 rounded-xl hover:bg-gray-800 transition-colors duration-300 cursor-pointer" onClick={() => setIsOpen(false)}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default function ShoppingCart({ isOpen, setIsOpen }) {
  return (
    <>
      <DarkOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <CartItems isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
