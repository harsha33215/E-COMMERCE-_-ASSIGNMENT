import { Link } from "wouter";
import { useCart } from "../context/CartContext.jsx";

function MiniCart() {
  const {
    cartItems,
    subtotal,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    closeCart,
  } = useCart();

  const handleLinkClick = () => {
    closeCart();
  };

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div className="mini-cart">
      <div className="mini-cart-header">
        <h3>Your Cart</h3>
        <span>{cartItems.length} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link
            href="/products"
            onClick={handleLinkClick}
            className="btn btn-primary"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h4 className="item-title">{item.title}</h4>
                  <div className="item-price-quantity">
                    <span className="item-price">
                      {formatCurrency(item.price)}
                    </span>
                    <div className="quantity-controls">
                      <button onClick={() => decrementQuantity(item.id)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => incrementQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="subtotal">
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="cart-actions">
              <Link href="/cart" onClick={handleLinkClick} className="btn-cart">
                View Cart
              </Link>
              <Link href="#" className="btn-checkout">
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MiniCart;
