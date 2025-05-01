import { Link } from "wouter";
import "./index.css";

function CategorySection() {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      count: 6,
    },
    {
      id: "jewelery",
      name: "Jewelry",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      count: 4,
    },
    {
      id: "men's clothing",
      name: "Men's Clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      count: 4,
    },
    {
      id: "women's clothing",
      name: "Women's Clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      count: 6,
    },
  ];

  return (
    <section className="category-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-description">
            Browse our extensive collection across various categories
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="category-card"
            >
              <div className="category-image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                />
              </div>
              <div className="category-info">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">
                  {category.count} Products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
