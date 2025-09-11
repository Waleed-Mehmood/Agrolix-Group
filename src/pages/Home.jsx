import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import LogoSlider from "../components/LogoSlider";
import FAQ from "../components/FAQ";
import LatestArticles from "../components/LatestArticles";
import TestimonialsSection from "../components/TestimonialsSection";
import FeatureSection from "../components/FeatureSection";
import ContactSection from "../components/ContactSection";
import CallToAction from "../components/CallToAction";
import ProductCategories from "../components/ProductCategories";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <LogoSlider />
      <ProductCategories />
      <FeatureSection />
      <TestimonialsSection />
      <FAQ />
      <LatestArticles />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}
