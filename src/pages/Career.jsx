import { useState } from "react";
import {
  FaChevronRight,
  FaUsers,
  FaFlask,
  FaShieldAlt,
  FaChartLine,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../assets/career/career.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const careerContent = {
  title: "Join Agrolix Group",
  intro:
    "At Agrolix Group, we are committed to innovation, quality, and growth in the agriculture sector. We believe in empowering our team to make a difference in the world of crop science and agricultural solutions. If you are passionate about making an impact and want to be part of a dynamic, forward-thinking organization, explore our career opportunities below.",
  opportunities: [
    {
      title: "Research & Development",
      description:
        "Work with our R&D team to develop innovative crop solutions and contribute to sustainable agriculture.",
      button: "Apply Now",
      icon: <FaFlask className="w-8 h-8" />,
    },
    {
      title: "Quality Control",
      description:
        "Ensure our products meet the highest standards and help us deliver quality to farmers nationwide.",
      button: "Apply Now",
      icon: <FaShieldAlt className="w-8 h-8" />,
    },
    {
      title: "Sales & Marketing",
      description:
        "Join our sales team to connect with farmers and promote our innovative products across the country.",
      button: "Apply Now",
      icon: <FaChartLine className="w-8 h-8" />,
    },
    {
      title: "Field Services",
      description:
        "Support farmers directly by providing expert advice and on-field solutions for better crop yields.",
      button: "Apply Now",
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
    },
  ],
  benefits: [
    "Innovative and supportive work environment",
    "Opportunities for professional growth",
    "Competitive compensation and benefits",
    "Commitment to sustainability and quality",
  ],
};

export default function Career() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Banner Section (replaces Hero Section) */}
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
                <FaUsers size={32} className="text-white sm:text-3xl md:text-5xl" />
              </div>
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {careerContent.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-green-100 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Be part of a dynamic team driving innovation and growth in agriculture. Explore your career with Agrolix Group!
            </motion.p>
          </motion.div>
        </div>

        {/* Opportunities Section */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Career Opportunities
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {careerContent.opportunities.map((op, idx) => (
              <motion.div
                key={idx}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                  hoveredCard === idx ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(16, 185, 129, 0.15)" }}
              >
                {/* Gradient overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors duration-300"
                      whileHover={{ rotate: 12 }}
                    >
                      <div className="text-green-700">{op.icon}</div>
                    </motion.div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: 20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                    >
                      <FaChevronRight className="w-6 h-6 text-green-600" />
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {op.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {op.description}
                  </motion.p>
                  <motion.a
                    href={`mailto:careers@agrolixgroup.com?subject=Job Application - ${encodeURIComponent(op.title)}`}
                    className="w-full bg-gradient-to-r from-[#611b74] to-[#722786] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#722786] hover:to-[#611b74] transition-all duration-300 transform group-hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center"
                    style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {op.button}
                    <FaChevronRight className="w-5 h-5 inline ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                Why Choose Agrolix Group?
              </h3>
              <div className="w-24 h-1 bg-white mx-auto rounded-full opacity-70"></div>
            </div>

            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              {careerContent.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="group text-center"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
                  }}
                  whileHover={{ scale: 1.07 }}
                >
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                    <motion.div
                      className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-300 transition-colors duration-300"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <span className="text-green-800 font-bold text-lg">
                        {idx + 1}
                      </span>
                    </motion.div>
                    <p className="text-green-100 font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          className="bg-gray-900 text-white py-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h3
              className="text-3xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to Join Our Team?
            </motion.h3>

            <motion.div
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  className="space-y-6"
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex items-center justify-center md:justify-start">
                    <FaEnvelope className="w-6 h-6 text-green-400 mr-3" />
                    <div>
                      <p className="text-gray-300 text-sm">Email Us</p>
                      <a href="mailto:info@agrolixgroup.com" className="text-white font-semibold hover:underline">
                        info@agrolixgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <FaPhone className="w-6 h-6 text-green-400 mr-3" />
                    <div>
                      <p className="text-gray-300 text-sm">Call Us</p>
                      <a href="tel:0622887723" className="text-white font-semibold hover:underline block">
                        062-2887723-24
                      </a>
                      <a href="tel:03018656824" className="text-white font-semibold hover:underline block">
                        03018656824
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center justify-center"
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div
                    className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-4 mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <FaEnvelope className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-gray-300 mb-4">
                    Send your CV and cover letter
                  </p>
                  <a
                    href="mailto:info@agrolixgroup.com?subject=Job Application&body=Please attach your CV and cover letter."
                    className="bg-gradient-to-r from-[#611b74] to-[#722786] text-white px-8 py-3 rounded-full font-semibold hover:from-[#722786] hover:to-[#611b74] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                    style={{ textDecoration: 'none' }}
                  >
                    Submit Application
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="text-gray-400">
                We are an equal opportunity employer committed to diversity and
                inclusion
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
