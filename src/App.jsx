import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ResearchAndDevelopment from "./pages/ResearchAndDevelopment";
import Companies from "./pages/Companies";
import About from "./pages/About";
import Management from "./pages/Management";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import Crops from "./pages/Crops";
import Seed from "./pages/Seed";
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
            <Route path="/products" element={<Products />} />
            <Route path="/product-category" element={<ProductCategory />} />
            <Route path="/crops" element={<Crops />} />
            <Route path="/seed" element={<Seed />} />
            <Route path="/quality-control" element={<QualityControl />} />
            <Route path="/career" element={<Career />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/research-and-development" element={<ResearchAndDevelopment />} />
            <Route path="/on-field-services" element={<OnFieldServices />} />
          </Routes>
        </main>
        {/* WhatsApp Floating Action Button */}
      <WhatsAppButton 
        phoneNumber="+923338674754"
        message="Hello! I want to know more about Suncrop Group."
        position="bottom-right"
      />
      </div>
    </Router>
  );
}
