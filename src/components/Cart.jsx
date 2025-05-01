import { Link } from "wouter";
import { useCart, calculateSubtotal } from "../contexts/CartContext.jsx";
import "./index.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
  } = useCart();

  const subtotal = calculateSubtotal(cartItems);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  const handleQuantityChange = (e, productId) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(productId, value);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-page">
        <div className="container">
          <div className="empty-cart-content">
            <i className="fas fa-shopping-cart empty-cart-icon"></i>
            <h1>Your cart is empty</h1>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link href="/products" className="btn-continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Your Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items-container">
            <div className="cart-header">
              <div className="cart-header-product">Product</div>
              <div className="cart-header-price">Price</div>
              <div className="cart-header-quantity">Quantity</div>
              <div className="cart-header-total">Total</div>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item-row" key={item.id}>
                <div className="cart-item-product">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-item-category">{item.category}</p>
                  </div>
                </div>
                <div className="cart-item-price">
                  {formatCurrency(item.price)}
                </div>
                <div className="cart-item-quantity">
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => decrementQuantity(item.id)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(e, item.id)}
                      className="quantity-input"
                    />
                    <button
                      className="quantity-btn"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-total">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>{formatCurrency(shipping)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>

            <Link href="/products" className="continue-shopping-link">
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
