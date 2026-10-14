import { useEffect, useState } from "react";

import ProductGrid from "../components/products/ProductGrid";
import { getProducts } from "../services/productService";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const data = await getProducts();

        setProducts(data.products);
      } catch (error) {
        setError("Failed to load products. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="container shop-page">
      <div className="page-heading">
        <p className="eyebrow">ZWears Collection</p>

        <h1>Shop All Products</h1>

        <p>
          Discover everyday essentials designed for comfort and style.
        </p>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </main>
  );
};

export default Shop;