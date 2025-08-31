
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-gray-900 to-green-900 text-white py-10 relative">
      <div className="absolute inset-0 bg-white bg-opacity-5 backdrop-blur-lg rounded-t-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start md:w-1/4 animate__animated animate__fadeInLeft">
            <Link to="/">
              <img src={logo} alt="Agrolix Group Logo" className="h-20 w-20 mb-4 rounded-full shadow-2xl border-4 border-white" />
            </Link>
            <p className="text-gray-200 text-base font-medium mb-6 text-center md:text-left">Agrolix Group is a leader in agricultural innovation, empowering farmers with quality products and expert support for a brighter future.</p>
            <div className="flex space-x-4 mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 hover:text-blue-400 transition-transform duration-200">
                <FaFacebookF className="h-7 w-7" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 hover:text-pink-400 transition-transform duration-200">
                <FaInstagram className="h-7 w-7" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:scale-110 hover:text-gray-400 transition-transform duration-200">
                <FaTiktok className="h-7 w-7" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 hover:text-blue-500 transition-transform duration-200">
                <FaLinkedinIn className="h-7 w-7" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start animate__animated animate__fadeInUp">
            <h3 className="font-bold text-lg mb-4 text-green-300">Quick Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <FaArrowRight className="h-4 w-4 text-green-300" /> Home
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <FaArrowRight className="h-4 w-4 text-green-300" /> About Us
                </a>
              </li>
              <li>
                <a href="/products" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <FaArrowRight className="h-4 w-4 text-green-300" /> Products
                </a>
              </li>
              <li>
                <a href="/crops" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <FaArrowRight className="h-4 w-4 text-green-300" /> Crops
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <FaArrowRight className="h-4 w-4 text-green-300" /> Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Details */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start animate__animated animate__fadeInRight">
            <h3 className="font-bold text-lg mb-4 text-green-300">Contact Us</h3>
            <ul className="space-y-2 text-base">
              <li>Email: <a href="mailto:info@agrolixgroup.com" className="hover:text-green-400 transition-colors">info@agrolixgroup.com</a></li>
              <li>Phone: <a href="tel:+923001234567" className="hover:text-green-400 transition-colors">+92-300-1234567</a></li>
              <li>Address: Agrolix Group, Lahore, Pakistan</li>
            </ul>
          </div>
        </div>
        {/* Copyright section at the very bottom */}
        <div className="w-full flex flex-col items-center justify-center mt-8">
          <div className="text-sm text-gray-300 mb-2">&copy; 2025 Agrolix Group. All rights reserved.</div>
          <div className="text-xs text-gray-400">Designed by Agrolix Group Web Team</div>
        </div>
      </div>
    </footer>
  );
}
import logo from '../assets/suncrop-logo.png';


