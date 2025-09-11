import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
  FaBuilding,
  FaLeaf,
  FaUsers,
  FaIndustry,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import agrolixLogo from "../assets/homepage/logo-images/agrolix-chem-ind.png";
import passionAgroLogo from "../assets/homepage/logo-images/passion-agro-pak.png";
import passionSeedsLogo from "../assets/homepage/logo-images/agro-passion-seeds.png";
import arzPakLogo from "../assets/homepage/logo-images/arz-pak.png";
import { Link } from "react-router-dom";
import contactusImg from "../assets/contact-us/contactus.webp";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    productInterest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        productInterest: "",
      });

      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
    title: "Head Office",
    content: "35 A Small Industrial Estate Bahawalpur",
    detail: "State-of-the-art office and production facilities",
    },
    {
      icon: FaPhone,
      title: "Phone Numbers",
    content: "062-2887723-24, 0301-8656824",
      detail: "Available during business hours",
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      content: "info@agrolixgroup.com",
      detail: "We respond within 24 hours",
    },
    {
      icon: FaClock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 5:00 PM",
      detail: "Saturday: 9:00 AM - 2:00 PM",
    },
  ];

  const subsidiaries = [
    {
      icon: FaIndustry,
      name: "Agrolix Chemical Industry",
      description: "Manufacturing and production of agrochemicals",
      logo: agrolixLogo,
    },
    {
      icon: FaLeaf,
      name: "Passion Agro Pakistan",
      description: "Agricultural solutions and crop protection",
      logo: passionAgroLogo,
    },
    {
      icon: FaBuilding,
      name: "Passion Agro Seeds",
      description: "High-quality seeds for better yields",
      logo: passionSeedsLogo,
    },
    {
      icon: FaUsers,
      name: "Arz e Pak Network",
      description: "Franchise and dealer network across Pakistan",
      logo: arzPakLogo,
    },
  ];

  return (
    <div>
      <Navbar />
  <div className="w-full">
        {/* Banner Section - styled like QualityControl */}
        <div
          className="relative h-56 sm:h-72 md:h-96 flex items-center justify-center bg-center bg-cover animate-fade-in w-full"
          style={{
            backgroundImage: `url(${contactusImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay Layer for Banner */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="text-center text-gray-800 max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4 md:px-6 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-green-600 to-[#a73fc4] bg-clip-text text-transparent">
              Get In Touch With Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed">
              Serving the farming community since 2000 with quality and commitment. Let's work together for a better agricultural future in Pakistan.
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-8">
  <div className="max-w-7xl mx-auto w-full">


          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-green-500 to-[#a73fc4] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-green-600 font-semibold mb-2">
                    {item.content}
                  </p>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              );
            })}
          </div>

          {/* ...existing code... */}

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl border border-gray-100">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6 animate-bounce">
                    <p className="font-semibold">
                      ✓ Message sent successfully! We'll contact you soon.
                    </p>
                  </div>
                )}

                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative">
                      <FaUser className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name *"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                    <div className="relative">
                      <FaBuilding className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company/Farm Name"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject *"
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    />
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                    >
                      <option value="">Product Interest</option>
                      <option value="insecticides">Insecticides</option>
                      <option value="weedicides">Weedicides</option>
                      <option value="fungicides">Fungicides</option>
                      <option value="micronutrients">Micronutrients</option>
                      <option value="granules">Granules</option>
                      <option value="seeds">Seeds</option>
                      <option value="franchise">Franchise Opportunity</option>
                    </select>
                  </div>

                  <div className="relative">
                    <FaCommentDots className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message *"
                      required
                      rows="6"
                      className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-[#a73fc4] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-base sm:text-lg hover:from-green-700 hover:to-[#8f35a8] transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Company Info */}
              <div className="bg-gradient-to-br from-green-600 to-[#a73fc4] rounded-3xl p-4 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Agrolix Group</h3>
                <div className="space-y-4">
                  <p className="text-green-100">
                    <strong>Founded:</strong> 2000
                  </p>
                  <p className="text-green-100">
                    <strong>Mission:</strong> Working for a better future for
                    the farming community
                  </p>
                  <p className="text-green-100">
                    <strong>Values:</strong> Quality & Commitment
                  </p>
                  <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur">
                    <p className="text-sm text-green-100">
                      "Ensuring food security in Pakistan through innovative
                      agricultural solutions."
                    </p>
                  </div>
                </div>
              </div>

              {/* Subsidiaries */}
              <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Companies
                </h3>
                <div className="space-y-4">
                  {subsidiaries.map((subsidiary, index) => {
                    const IconComponent = subsidiary.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group"
                      >
                        <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={subsidiary.logo}
                            alt={subsidiary.name + ' logo'}
                            className="w-12 h-12 object-contain rounded-lg border border-gray-200 bg-white shadow"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {subsidiary.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {subsidiary.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Products */}
              <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Products
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { name: "Fungicides", path: "/products/fungicides" },
                    { name: "Herbicides", path: "/products/herbicides" },
                    { name: "Insecticides", path: "/products/insecticides" },
                    { name: "Granules", path: "/products/granules" },
                    { name: "Micro Nutrients", path: "/products/micro-nutrients" },
                    { name: "Fertilizers", path: "/products/fertilizers" },
                  ].map((product, index) => (
                    <Link
                      to={product.path}
                      key={index}
                      className="bg-gradient-to-r from-green-500 to-[#a73fc4] text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 block"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-10 sm:mt-16 text-center">
            <div className="bg-gradient-to-r from-green-600 to-[#a73fc4] rounded-3xl p-6 sm:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-base sm:text-xl text-green-100 mb-4 sm:mb-8 max-w-2xl mx-auto">
                Join our network of trusted dealers and franchises under Arz e
                Pak. Let's grow together for Pakistan's agricultural prosperity.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
                  Become a Dealer
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}</style>
      </div>
      {/* Google Map Section - moved to bottom */}
      <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <iframe
          title="35 A Small Industrial Estate Bahawalpur Location"
          src="https://www.google.com/maps?q=35%20A%20Small%20Industrial%20Estate%20Bahawalpur&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px] sm:h-[400px] md:h-[450px]"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
