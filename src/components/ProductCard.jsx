import { useState } from "react";
import { useCart } from "../../contexts/CartContext.jsx";
import "./index.css";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const formatRating = (rating) => {
    if (!rating || !rating.rate) return null;

    const stars = [];
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return (
      <div className="rating">
        <div className="stars">{stars}</div>
        <span className="count">({rating.count || 0})</span>
      </div>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
        </button>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.title}</h3>
        {formatRating(product.rating)}
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            <i className="fas fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
