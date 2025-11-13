import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { TbShoppingCartHeart } from "react-icons/tb";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <MdFavorite />
        <MdFavoriteBorder />
        <TbShoppingCartHeart />
      </main>
    </div>
  );
}
