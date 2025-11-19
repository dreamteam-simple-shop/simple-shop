import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-15 w-full sm:h-125 lg:h-175 grid grid-cols-2">
      <div className="col-span-2">
        <Image src="/hero.webp" alt="Hero" loading="eager" width={1920} height={1080} className="w-full sm:h-125 lg:h-150 lg:object-top object-cover filter brightness-80" />
      </div>
      <div className="col-span-1 absolute top-0 left-0 w-1/2 h-[80%] flex flex-col gap-6 justify-center z-10 text-white pl-15">
        <div className="bg-white text-black text-sm px-4 py-1 rounded-xl w-fit">New Collection</div>
        <h1 className="text-xl">Discover Your Style</h1>
        <h1 className="text-lg">Explore our curated collection of modern fashion essentials designed for the contemporary lifestyle.</h1>
        <button className="bg-white text-md hover:bg-black transition-colors duration-300 cursor-pointer text-black hover:text-white px-4 py-2 rounded-xl w-fit">Shop Now</button>
      </div>
    </div>
  );
}
