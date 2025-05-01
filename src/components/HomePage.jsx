import HeroSection from "../HeroSection/HeroSection.jsx";
import CategorySection from "../CategorySection/CategorySection.jsx";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts.jsx";
import PromoSection from "../PromoSection/PromoSection.jsx";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection.jsx";
import NewsletterSection from "../NewsletterSection/NewsletterSection.jsx";
import "./index.css";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
}

export default HomePage;
