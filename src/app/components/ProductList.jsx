import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-(--list-grid) justify-between gap-3 py-5 mt-20 px-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
