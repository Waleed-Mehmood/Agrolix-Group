import { FaCheckCircle, FaAward, FaShieldAlt, FaMicroscope } from 'react-icons/fa';
import qualityControlImg from '../assets/qualitycontrol/lab.jpg';
import bannerImg from '../assets/qualitycontrol/qualitycontrol1.webp';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import certificateImg from '../assets/qualitycontrol/Accreditation-certificate.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function QualityControl() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar/>
      <div className="bg-white">
        {/* Banner Section */}
        <div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center bg-center bg-cover"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay Layer for Banner */}
          <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"></div>
          <motion.div
            className="text-center text-white max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white bg-opacity-20 p-3 rounded-full">
                <FaMicroscope size={32} className="text-white sm:text-3xl md:text-5xl" />
              </div>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Quality Control
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-green-100 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Ensuring excellence through rigorous testing and international standards in agricultural innovation
            </motion.p>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content Area */}
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div
                className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <span className="text-green-600 font-semibold text-base sm:text-lg">Excellence in Quality Assurance</span>
              </motion.div>

              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                State-of-the-Art ISO Certified Laboratories
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                The Quality Control Wing of Agrolix Group is renowned for its rigorous standards and cutting-edge facilities. Our state-of-the-art, ISO-certified laboratories ensure that every product undergoes meticulous testing and quality assurance processes operated by our experienced and trained staff.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                We are committed to delivering only the highest quality agrochemicals, adhering to international benchmarks, and continuously innovating to meet the evolving needs of modern agriculture.
              </motion.p>

              {/* Achievement Highlight */}
              <motion.div
                className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-4 sm:p-6 rounded-r-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-start space-x-3">
                  <FaAward className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Historic Achievement</h3>
                    <p className="text-gray-700">
                      Agrolix Group quality control laboratory is the <span className="font-semibold text-green-700">first Lab in Bahawalpur</span> to be accredited to <span className="font-semibold">ISO-17025:2017</span> in 2021 by PNAC Islamabad.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Certificate Modal Trigger Button */}
              <motion.div
                className="flex justify-center my-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button
                  className="bg-[#611b74] hover:bg-[#722786] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#611b74]"
                  onClick={() => setShowModal(true)}
                >
                  View Accreditation Certificate
                </button>
              </motion.div>

              {/* Modal Popup for Certificate */}
              <AnimatePresence>
                {showModal && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full relative"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <button
                        className="absolute top-3 right-3 text-gray-500 hover:text-green-600 text-2xl font-bold focus:outline-none"
                        onClick={() => setShowModal(false)}
                        aria-label="Close"
                      >
                        &times;
                      </button>
                      <div className="text-lg font-semibold text-green-700 mb-2 text-center">Accreditation Certificate</div>
                      <img
                        src={certificateImg}
                        alt="Accreditation Certificate"
                        className="rounded-xl object-contain w-full h-80 mb-2 border border-green-200 shadow-lg"
                      />
                      <div className="text-sm text-gray-500 text-center">ISO-17025:2017 Accreditation by PNAC Islamabad</div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Key Features */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {[
                  { icon: FaCheckCircle, text: "ISO-17025:2017 Certified" },
                  { icon: FaMicroscope, text: "Advanced Testing Equipment" },
                  { icon: FaShieldAlt, text: "Rigorous Quality Standards" },
                  { icon: FaAward, text: "International Benchmarks" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Area */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div
                className="rounded-2xl p-4 sm:p-8 h-64 sm:h-80 md:h-96 flex items-center justify-center shadow-lg bg-center bg-cover relative"
                style={{
                  backgroundImage: `url(${qualityControlImg})`
                }}
              >
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
                {/* Laboratory Illustration */}
                <motion.div
                  className="text-center relative z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-white rounded-full p-4 sm:p-6 shadow-md mb-2 sm:mb-4 mx-auto w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center">
                    <FaMicroscope size={28} className="text-green-600 sm:text-4xl md:text-5xl" />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                      <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Quality Testing</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                      <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">ISO Certified</span>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2 sm:p-3 shadow-sm">
                      <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">Advanced Analysis</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-24 h-12 sm:h-24 bg-green-200 rounded-full opacity-60"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-8 sm:w-16 h-8 sm:h-16 bg-emerald-300 rounded-full opacity-40"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-green-50 to-emerald-50 py-10 sm:py-14 md:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >Lab Achievements</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-center">
              {[{
                icon: FaAward,
                title: "2021",
                subtitle: "ISO Certification Year"
              }, {
                icon: FaShieldAlt,
                title: "First",
                subtitle: "Lab in Bahawalpur"
              }, {
                icon: FaCheckCircle,
                title: "ISO-17025",
                subtitle: "International Standard"
              }].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-4 sm:p-8 rounded-xl shadow-lg flex flex-col items-center transition duration-300 hover:bg-green-50 hover:shadow-2xl hover:-translate-y-1 hover:border-green-400 hover:border hover:text-green-700"
                  initial={{ opacity: 0, y: 40, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <stat.icon className="text-2xl sm:text-4xl text-green-600 mb-2 sm:mb-3" />
                  <div className="text-lg sm:text-2xl font-bold text-green-700 mb-1">{stat.title}</div>
                  <div className="text-gray-700 font-medium text-sm sm:text-base">{stat.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
}