import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid grid-cols-(--list-grid) justify-between gap-3 py-5">
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
