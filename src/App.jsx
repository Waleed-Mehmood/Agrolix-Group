import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Management from "./pages/Management";
import Fungicides from "./pages/Fungicides";
import Insecticides from "./pages/Insecticides";
import Granules from "./pages/Granules";
import Herbicides from "./pages/Herbicides";
import MicroNutrients from "./pages/MicroNutrients";
import Fertilizers from "./pages/Fertilizers";
import ProductCategory from "./pages/ProductCategory";
import Crops from "./pages/Crops";
import Seeds from "./pages/Seeds";
import QualityControl from "./pages/QualityControl";
import Career from "./pages/Career";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import OnFieldServices from "./pages/OnFieldServices";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
  <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />
            <Route path="/products/fungicides" element={<Fungicides />} />
              <Route path="/products/insecticides" element={<Insecticides />} />
              <Route path="/products/granules" element={<Granules />} />
              <Route path="/products/herbicides" element={<Herbicides />} />
              <Route path="/products/micro-nutrients" element={<MicroNutrients />} />
              <Route path="/products/fertilizers" element={<Fertilizers />} />
            <Route path="/product-category" element={<ProductCategory />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/seeds" element={<Seeds />} />
            <Route path="/quality-control" element={<QualityControl />} />
            <Route path="/career" element={<Career />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/research-and-development" element={<ResearchAndDevelopment />} />
            <Route path="/on-field-services" element={<OnFieldServices />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        {/* WhatsApp Floating Action Button */}
      <WhatsAppButton 
        phoneNumber="+923018656824"
        message="Hello! I want to know more about Agrolix Group."
        position="bottom-right"
      />
      </div>
    </Router>
  );
}
