import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMicroscope } from 'react-icons/fa';
import bannerImg from '../assets/research/agriculture-research1.jpg';
import researchImg from '../assets/research/agriculture-research2.jpeg';

const ResearchAndDevelopment = () => {
  return (
    <div>
      <Navbar />
        <motion.div className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        {/* Banner Section */}
        <motion.div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center bg-center bg-cover"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
  {/* Overlay Layer for Banner */}
  <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
        <motion.div 
          className="text-center text-white max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="flex justify-center mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <FaMicroscope size={32} className="text-white sm:text-3xl md:text-5xl" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Research & Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-green-100 max-w-xl mx-auto leading-relaxed">
            Committed to excellence in agricultural innovation through
              continuous research and development
          </p>
  </motion.div>
  </motion.div>

        {/* Main Content Section */}
        <motion.div 
          className="max-w-6xl mx-auto py-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div 
              className="space-y-6"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Research and Development
                </h2>
              </div>

              <div className="prose prose-lg text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Agrolix Group firmly knows and believes in the importance of
                  research and development and is always trying to bring the
                  best they can for their customer. We are constantly working on
                  field trials of new products and trying to get better and
                  better chemistries for our farming community along with
                  on-field assistance.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                  By staying at the forefront of agrochemical research, we
                  strive to provide farmers with the most advanced tools to
                  enhance crop yields and protect against pests, thereby
                  supporting the agricultural community in Pakistan and beyond.
                </p>
              </div>

              {/* Quality Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <motion.div 
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(34,197,94,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="p-2 bg-green-100 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Field Trials
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Rigorous testing of new products in real agricultural
                      conditions
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(34,197,94,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="p-2 bg-green-100 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive quality control at every stage of
                      development
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(34,197,94,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="p-2 bg-green-100 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6.5A1.5 1.5 0 0116.5 16H15v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2H3.5A1.5 1.5 0 012 14.5V8a2 2 0 012-2h2zm4-4a1 1 0 00-1 1v1h2V3a1 1 0 00-1-1zM7 16v-2h6v2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Advanced Chemistry
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Developing cutting-edge chemical solutions for agriculture
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(34,197,94,0.15)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="p-2 bg-green-100 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      On-field Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Direct assistance and guidance to farming communities
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.04 }}
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={researchImg}
                  alt="Agricultural Research and Development"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    100+
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    Products Tested
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA Section */}
          <motion.div 
            className="mt-20 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Committed to Agricultural Excellence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our dedication to research and development ensures that farmers
                receive the most effective and sustainable agricultural
                solutions, contributing to food security and economic growth.
              </p>
              <motion.div
                whileHover={{ scale: 1.07, backgroundColor: "#15803d" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg cursor-pointer"
              >
                <Link to="/about" className="flex items-center space-x-2 w-full h-full">
                  <span>About Our Research</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
  <Footer />
    </div>
  );
};

export default ResearchAndDevelopment;
