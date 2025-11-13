import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ProductSingel = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-1">
        <figure className="grid justify-center self-center">
          <Image src="https://placecats.com/neo/300/200" loading="eager" alt="cat" width={400} height={400} className="col-1 row-1 rounded-4xl self-stretch object-cover aspect-square"></Image>
          <div className="col-1 row-1 justify-self-start p-3">
            <p className="bg-black text-white py-1 px-2 rounded-xl m-1">New</p>
            <p className="bg-red-600 text-white py-1 px-2 rounded-xl m-1">Sale</p>
          </div>
        </figure>
        <div className="flex gap-2 p-3 self-center justify-center">
          <Image src="https://placecats.com/neo/300/200" loading="eager" alt="cat" width={90} height={90} className="aspect-square rounded-xl self-stretch object-cover" />
          <Image src="https://placecats.com/neo/300/200" loading="eager" alt="cat" width={90} height={90} className="aspect-square rounded-xl self-stretch object-cover" />
          <Image src="https://placecats.com/neo/300/200" loading="eager" alt="cat" width={90} height={90} className="aspect-square rounded-xl self-stretch object-cover" />
          <Image src="https://placecats.com/neo/300/200" loading="eager" alt="cat" width={90} height={90} className="aspect-square rounded-xl self-stretch object-cover" />
        </div>
      </div>
      <div className="col-2">
        <div className="grid gap-2 pb-4">
          <p className="text-gray-400 pt-5">Clothing</p>
          <h1 className="text-xl">Classic Denim Jacket</h1>
          <div className="flex gap-2 items-center">
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <p className="text-gray-500">128(reviews)</p>
          </div>
          <div className="flex gap-5 items-center">
            <h2 className="text-4xl"> $89.99 </h2>
            <h2 className="text-2xl text-gray-400 line-through"> $120</h2>
            <p className="bg-red-600 text-white py-1 px-3 rounded-xl">25% OFF</p>
          </div>
        </div>

        <hr className="text-gray-400" />
        <h3 className="text-xl py-4">Description</h3>
        <p className="text-gray-600">Experience premium quality and timeless design with this carefully crafted piece. Made from high-quality materials, this product combines comfort with style, perfect for any occasion. Features include durable construction, attention to detail, and a modern aesthetic that complements any wardrobe.</p>
        <h3 className="text-xl py-4">Select size</h3>
        <div className="inline-grid grid-cols-3 gap-3">
          <button className=" w-15 h-15 rounded-2xl bg-black text-white">XS</button>
          <button className=" w-15 h-15 rounded-2xl border border-black">S</button>
          <button className=" w-15 h-15 rounded-2xl border border-black">M</button>
          <button className=" w-15 h-15 rounded-2xl border border-black">L</button>
          <button className=" w-15 h-15 rounded-2xl border border-black">XL</button>
          <button className=" w-15 h-15 rounded-2xl border border-black">XXL</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSingel;
