"use client";
import useStore from "@/store/Cart";
import GetItems from "./ShoppingCartItem";

const FetchShoppingCart = () => {
  const { cart, toggleCart } = useStore();
  return cart.map((i) => (
    <div>
      <GetItems id={i} key={i}/>
    </div>
  ));
};

export default FetchShoppingCart;
