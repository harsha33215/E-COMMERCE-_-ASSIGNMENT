import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { useCart } from "../context/CartContext.jsx";
import MiniCart from "./MiniCart.jsx";
import "./Header.css";

function Header() {
  const { cartCount, toggleCart, isCartOpen, closeCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const cartRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      if (
        isCartOpen &&
        cartRef.current &&
        !cartRef.current.contains(event.target)
      ) {
        closeCart();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isCartOpen, closeCart]);

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/">
              <i className="fas fa-shopping-bag"></i>
              <span>ShopStyle</span>
            </Link>
          </div>

          <nav className="nav-desktop">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="#">Categories</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </nav>

          <div className="header-actions">
            <div className="cart-icon-container" ref={cartRef}>
              <button className="cart-button" onClick={toggleCart}>
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="cart-count">{`Cart: ${cartCount}`}</span>
                )}
              </button>
              {isCartOpen && <MiniCart />}
            </div>

            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="container">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Categories
          </Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
