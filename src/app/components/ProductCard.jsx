import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <Link href="/detalje" className="rounded-4xl shadow-sm">
      <div>
        <figure className="grid">
          <Image src="https://placecats.com/neo/300/200" loading="eager" alt="cat" width={800} height={800} className="col-1 row-1 rounded-t-4xl self-stretch object-cover aspect-square"></Image>
          <div className="col-1 row-1 justify-self-start p-3">
            <p className="bg-black text-white py-1 px-2 rounded-xl m-1">New</p>
            <p className="bg-red-600 text-white py-1 px-2 rounded-xl m-1">Sale</p>
          </div>
        </figure>
        <div className="p-10">
          <p className="text-gray-600">Clothing</p>
          <h1 className="text-lg">Classic Denim Jacket</h1>
          <p>
            $89.99 <span className="line-through text-gray-400">$1200</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
