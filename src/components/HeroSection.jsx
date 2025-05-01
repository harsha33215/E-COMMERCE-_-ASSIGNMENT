import { Link } from "wouter";
import "./index.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Quality Products for Your Lifestyle
          </h1>
          <p className="hero-description">
            Explore our curated collection of premium products. From stylish
            clothing to cutting-edge electronics, we've got everything you need.
          </p>
          <div className="hero-buttons">
            <Link href="/products" className="btn btn-primary">
              Shop Now
            </Link>
            <Link href="#" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
              alt="Featured product"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
