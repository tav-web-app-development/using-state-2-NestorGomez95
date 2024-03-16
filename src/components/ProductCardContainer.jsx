import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products }) {
  const productsJsx = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <h1>Discover Your Favorite Products</h1>
      {productsJsx}
    </>
  );
}
