import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of satisfied farmers who trust our products for better yields and sustainable farming solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-white text-green-700 hover:bg-green-50 px-6 sm:px-8 py-3 rounded-lg font-semibold transition duration-300 text-sm sm:text-base"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-green-700 px-6 sm:px-8 py-3 rounded-lg font-semibold transition duration-300 text-sm sm:text-base"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
