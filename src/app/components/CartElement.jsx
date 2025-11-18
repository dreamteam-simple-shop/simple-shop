"use client";
import useStore from "@/store/Cart";
import { TbShoppingCartPlus } from "react-icons/tb";

const Cart = ({ id }) => {
  const { cart, toggleCart } = useStore();
  console.log(cart);
  if (cart.includes(id)) {
    console.log(cart.id);
    return <TbShoppingCartPlus color="red" size={30} onClick={() => toggleCart(id)} />;
  } else {
    return <TbShoppingCartPlus size={30} onClick={() => toggleCart(id)} />;
  }
};

export default Cart;
