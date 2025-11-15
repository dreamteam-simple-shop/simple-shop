import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import Filter from "./components/Filter";

export default function Home() {
  return (
    <>  
      <main className="">
        <Hero />
        <Filter />
        <ProductList />
      </main>
    </>
  );
}
