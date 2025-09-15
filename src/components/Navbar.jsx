import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import agrolixLogo from '../assets/earth.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
    { 
      name: 'OUR CONTRIBUTION', 
      href: '#contribution',
      dropdown: [
    { name: 'On Field Services', href: '/on-field-services' },
    { name: 'Research & Development', href: '/research-and-development' }
      ]
    },
  { name: 'QUALITY CONTROL', href: '/quality-control' },
    { 
      name: 'PRODUCTS', 
      href: '#products',
      dropdown: [
  { name: 'Fungicides', href: '/products/fungicides' },
  { name: 'Herbicides', href: '/products/herbicides' },
  { name: 'Insecticides', href: '/products/insecticides' },
  { name: 'Granules', href: '/products/granules' },
  { name: 'Micro Nutrients', href: '/products/micro-nutrients' },
  { name: 'Fertilizers', href: '/products/fertilizers' }
      ]
    },
  { name: 'SEEDS', href: '/seeds' },
  { name: 'CROPS', href: '/crops' },
  { name: 'COMPANIES', href: '/companies' },
  { name: 'CAREER', href: '/career' },
  { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-[#7a9955] via-[#7a9955] to-[#7a9955] shadow-lg z-50 py-4 xl:py-5 ">
      <div className="mx-auto px-4 sm:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img src={agrolixLogo} alt="Agrolix Logo" className="w-32 h-24 sm:w-48 sm:h-36 object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="text-white hover:bg-white hover:text-[#7a9955] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 group"
                    >
                      <span>{link.name}</span>
                        <HiChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f1ffe2] hover:text-[#7a9955] transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="text-white hover:bg-white hover:text-[#7a9955] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button (only hamburger, cross moved to overlay) */}
          <div className="xl:hidden">
            {!isMenuOpen && (
              <button
                onClick={toggleMenu}
                className="text-white hover:text-[#7a9955] focus:outline-none focus:text-green-200 transition-colors duration-300"
              >
                <HiMenu className="h-7 w-7" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`xl:hidden fixed top-0 left-0 w-full h-full animate__animated ${isMenuOpen ? 'animate__fadeInDown' : 'animate__fadeOutUp'} ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-500 z-50`}
          style={{ backdropFilter: 'blur(12px)' }}
        >
          {/* Cross button inside overlay */}
          <div className="flex justify-end px-2 pt-2 sm:px-4 sm:pt-4">
            <button
              onClick={toggleMenu}
              className="text-white bg-[#7a9955] hover:bg-[#6b8e4e] rounded-full p-2 sm:p-3 shadow-lg focus:outline-none transition-colors duration-300"
              aria-label="Close menu"
            >
              <HiX className="h-7 w-7 sm:h-8 sm:w-8" />
            </button>
          </div>
          <div className="mx-auto px-2 sm:px-4 pt-2 sm:pt-4 pb-4 sm:pb-6 space-y-2 bg-[#7a9955] rounded-b-2xl shadow-2xl mt-0 mb-0 w-full max-w-md overflow-y-auto max-h-[80vh]">
            {navLinks.map((link, index) => (
              <div key={index} className="">
                {link.dropdown ? (
                  <div className="">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="w-full flex items-center justify-between text-white bg-[#a4c67a] hover:bg-green-600 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md transition-all duration-300"
                    >
                      <span>{link.name}</span>
                      <HiChevronDown className={`w-5 h-5 ml-2 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-3 sm:pl-4 pt-1 sm:pt-2 space-y-1 animate__animated animate__fadeInDown">
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            className="block px-3 sm:px-4 py-2 rounded-lg bg-[#a4c67a] text-[#e9ffcd] hover:bg-green-600 hover:text-white font-medium text-xs sm:text-sm shadow transition-all duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="block w-full text-white bg-[#a4c67a] hover:bg-[#7a9955] px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base shadow-md transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="xl:hidden fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;