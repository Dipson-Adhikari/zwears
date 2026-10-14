import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h3>No products found</h3>
        <p>Check back soon for new arrivals.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;