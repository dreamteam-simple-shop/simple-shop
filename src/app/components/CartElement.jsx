"use client";
import useStore from "@/store/Cart";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbShoppingCartMinus } from "react-icons/tb";

const Cart = ({ id }) => {
  const { cart, toggleCart } = useStore();
  if (cart.includes(id)) {
    return (
      <button
        className="bg-black text-white border border-black py-3 px-6 rounded-4xl self-center flex justify-start items-center gap-3 w-[90%] m-5 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          toggleCart(id);
        }}
      >
        <TbShoppingCartMinus size={22} />
        <p>Remove from cart</p>
      </button>
    );
  } else {
    return (
      <button
        className="bg-black text-white border border-black py-3 px-6 rounded-4xl self-center flex justify-center items-center gap-3 w-[90%] m-5 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          toggleCart(id);
        }}
      >
        <TbShoppingCartPlus size={22} />
        Add to cart
      </button>
    );
  }
};

export default Cart;
