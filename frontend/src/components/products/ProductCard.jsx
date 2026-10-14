import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const image =
    product.images?.[0] || "/images/placeholder.jpg";

  return (
    <article className="product-card">
      <Link to={`/products/${product._id}`}>
        <div className="product-image">
          <img
            src={image}
            alt={product.name}
            loading="lazy"
          />

          {product.isFeatured && (
            <span className="product-badge">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <Link to={`/products/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>

        <p className="product-price">
          Rs. {product.price.toLocaleString()}
        </p>
      </div>
    </article>
  );
};

export default ProductCard;