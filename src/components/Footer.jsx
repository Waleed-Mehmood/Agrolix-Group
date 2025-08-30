import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaArrowRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import logo from '../assets/suncrop-logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'OUR CONTRIBUTION', href: '/on-field-services' },
    { name: 'QUALITY CONTROL', href: '/quality-control' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'SEEDS', href: '/seeds' },
    { name: 'CROPS', href: '/crops' },
    { name: 'COMPANIES', href: '/companies' },
    { name: 'CAREER', href: '/career' },
    { name: 'CONTACT US', href: '/contact' }
  ];

  const ourContribution = [
    { name: 'On Field Services', href: '/on-field-services' },
    { name: 'Research & Development', href: '/research-and-development' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com/suncropgroup', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/suncropgroup', color: 'hover:text-pink-500' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com/@suncropgroup', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com/company/suncropgroup', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 via-gray-900 to-green-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-400 rounded-full blur-2xl"></div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="block">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="Suncrop Group Logo" 
                    className="h-16 w-16 rounded-full shadow-2xl border-3 border-green-300 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                    Suncrop Group
                  </h2>
                  <div className="flex items-center space-x-1 text-green-300 text-base">
                    <FaLeaf className="w-3 h-3" />
                    <span>Agricultural Innovation</span>
                  </div>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 text-base leading-relaxed">
              Leading the future of agriculture with innovative solutions, quality products, and expert support. 
              Empowering farmers to cultivate success and sustainability.
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-green-300 font-semibold mb-3 text-base uppercase tracking-wide">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-10 h-10 bg-white bg-opacity-10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-20 hover:scale-110 transform transition-all duration-300 ${social.color} group`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-lg mb-4 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 hover:translate-x-1 transition-all duration-200 group text-base"
                >
                  <FaArrowRight className="w-3 h-3 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-lg mb-4 relative">
              Our Contribution
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
            </h3>
            <nav className="space-y-2">
              {ourContribution.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 hover:translate-x-1 transition-all duration-200 group text-base"
                >
                  <FaArrowRight className="w-3 h-3 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-green-300 font-bold text-lg mb-4 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@suncropgroup.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200 group text-base"
              >
                <div className="w-8 h-8 bg-yellow-400 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <FaEnvelope className="w-4 h-4 text-yellow-400" />
                </div>
                <span>info@suncropgroup.com</span>
              </a>
              
              <a 
                href="tel:+923001234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200 group text-base"
              >
                <div className="w-8 h-8 bg-green-400 bg-opacity-20 rounded-lg flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                  <FaPhone className="w-4 h-4 text-green-400" />
                </div>
                <span>+92-300-1234567</span>
              </a>
              
              <div className="flex items-start space-x-3 text-gray-300 text-base">
                <div className="w-8 h-8 bg-blue-400 bg-opacity-20 rounded-lg flex items-center justify-center mt-0.5">
                  <FaMapMarkerAlt className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p>Suncrop Group Headquarters</p>
                  <p className="text-gray-400">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-base text-gray-400">
            <span>&copy; {currentYear} Suncrop Group. All rights reserved.</span>
          </div>
          
          <div className="text-xs text-gray-500 flex items-center space-x-2">
            <FaLeaf className="w-3 h-3 text-green-400" />
            <span>Designed with 🌱 by Suncrop Group Web Team</span>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FaArrowRight className="w-4 h-4 text-white transform -rotate-90" />
        </button>
      </div>
    </footer>
  );
}