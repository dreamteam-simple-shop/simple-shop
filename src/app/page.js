import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { TbShoppingCartHeart } from "react-icons/tb";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <>
      <header></header>
      <main className="">
        <MdFavorite />
        <MdFavoriteBorder />
        <TbShoppingCartHeart />
        <ProductList />
      </main>
      <footer></footer>
    </>
  );
}
