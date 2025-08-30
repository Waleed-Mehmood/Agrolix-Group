import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import LogoSlider from "../components/LogoSlider";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LogoSlider />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
}
