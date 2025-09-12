import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSeedling, 
  FaLeaf, 
  FaBug, 
  FaDotCircle, 
  FaAtom, 
  FaTint 
} from 'react-icons/fa';

const ProductCategories = () => {
  const categories = [
    {
      name: "Fungicides",
      path: "/products/fungicides",
      description: "Effective solutions for fungal disease control",
      icon: <FaLeaf className="text-4xl text-[#a4c67a]" />,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Herbicides", 
      path: "/products/herbicides",
      description: "Advanced weed control products",
      icon: <FaSeedling className="text-4xl text-[#a4c67a]" />,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Insecticides",
      path: "/products/insecticides", 
      description: "Protection against harmful insects",
      icon: <FaBug className="text-4xl text-[#a4c67a]" />,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Granules",
      path: "/products/granules",
      description: "Slow-release agricultural solutions",
      icon: <FaDotCircle className="text-4xl text-[#a4c67a]" />,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Micro Nutrients",
      path: "/products/micro-nutrients",
      description: "Essential nutrients for plant health",
      icon: <FaAtom className="text-4xl text-[#a4c67a]" />,
      color: "from-green-400 to-green-600"
    },
    {
      name: "Fertilizers",
      path: "/products/fertilizers",
      description: "Complete plant nutrition solutions",
      icon: <FaTint className="text-4xl text-[#a4c67a]" />,
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Our Products
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#9542ac] to-[#8827a3] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6">
            Discover our comprehensive range of agricultural solutions designed to enhance crop productivity and protect your harvest
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.path}
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 text-center group-hover:text-gray-900 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
                  {category.description}
                </p>
                
                {/* Call to Action */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#a4c67a] group-hover:text-primary transition-colors">
                    Explore Products
                    <svg className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Bottom Border Animation */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#a4c67a] to-[#79a543] group-hover:w-full transition-all duration-500`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;