import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLeaf,
  FaHandshake,
  FaChartLine,
  FaSeedling,
  FaGraduationCap,
  FaMicroscope
} from "react-icons/fa";
import { GiFarmer, GiPlantSeed } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bannerImg from '../assets/onfieldservice/OnFieldService1.jpg';

const OnFieldServices = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        className="min-h-screen bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Banner Section */}
        <motion.div 
          className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center bg-center bg-cover"
          style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overlay Layer for Banner */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
          ></motion.div>
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
              Farmers Training and On-field Services
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-green-100 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Empowering farmers across Pakistan with expert guidance,
              innovative solutions, and lasting partnerships
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Main Content Section */}
        <motion.div
          className="max-w-6xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Introduction */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-green-100 p-4 rounded-full">
                <GiFarmer className="text-5xl text-green-600" />
              </div>
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Building Agricultural Excellence Together
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At the heart of our mission lies the growth and development of our
              farmers. Our dedicated team of agri graduates provides on-field
              services across Pakistan, ensuring timely guidance and expert
              support tailored to crop needs.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <FaGraduationCap className="text-2xl text-green-600" />,
                bg: "bg-green-100",
                title: "Expert Team",
                desc: "Dedicated agri graduates providing professional guidance and support across Pakistan"
              },
              {
                icon: <FaUsers className="text-2xl text-blue-600" />,
                bg: "bg-blue-100",
                title: "Field Visits",
                desc: "Regular on-site visits to monitor crop health and provide timely interventions"
              },
              {
                icon: <GiPlantSeed className="text-2xl text-yellow-600" />,
                bg: "bg-yellow-100",
                title: "Demonstrations",
                desc: "Practical field demonstrations to showcase latest pest control solutions"
              },
              {
                icon: <FaLeaf className="text-2xl text-purple-600" />,
                bg: "bg-purple-100",
                title: "Awareness Sessions",
                desc: "Educational programs to help farmers adopt effective agricultural practices"
              },
              {
                icon: <FaHandshake className="text-2xl text-red-600" />,
                bg: "bg-red-100",
                title: "Partnerships",
                desc: "Building lasting relationships based on trust and proven performance"
              },
              {
                icon: <FaChartLine className="text-2xl text-orange-600" />,
                bg: "bg-orange-100",
                title: "Improved Yield",
                desc: "Helping farmers achieve better productivity and increased crop yields"
              }
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(34,197,94,0.15)" }}
              >
                <div className={`flex items-center mb-4`}>
                  <div className={`${card.bg} p-3 rounded-full mr-4`}>{card.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                </div>
                <p className="text-gray-600">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-10 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-green-600 p-4 rounded-full">
                <MdAgriculture className="text-4xl text-white" />
              </div>
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Our aim is not just to sell products, but to build lasting partnerships based on trust and performance. By addressing pest challenges directly in the field, we empower farmers to improve yield and productivity.
            </motion.p>
            <motion.p
              className="text-xl font-semibold text-green-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Together, we strive for a more prosperous and resilient agricultural future.
            </motion.p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.08, backgroundColor: "#15803d" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = '/contact'}
            >
              Partner With Us Today
            </motion.button>
          </motion.div>
        </motion.div>
  </motion.div>
      <Footer />
    </div>
  );
};

export default OnFieldServices;
