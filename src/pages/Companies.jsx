import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLeaf, 
  FaSeedling, 
  FaShieldAlt, 
  FaBullseye, 
  FaUsers, 
  FaAward, 
  FaChartLine, 
  FaCheckCircle,
  FaStar,
  FaBolt,
  FaGlobe
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "Agrolix Chemicals Industry",
      established: "2000",
      tagline: "Trusted Crop Protection Solutions",
      description: "Agrolix Chemicals Industry, established in 2000, is a trusted name in Pakistan's agrochemical sector, dedicated to empowering farmers with effective and innovative crop protection solutions. For over two decades, the company has been committed to delivering high-quality pesticides, herbicides, fungicides and micro nutrients that ensure healthy crops and improved yields.",
      keyPoints: [
        "High-quality pesticides, herbicides & fungicides",
        "Experienced agri-graduates team",
        "Strict quality standards & testing",
        "Strong farmer & dealer relationships"
      ],
      icon: <FaShieldAlt className="w-12 h-12 text-green-600" />,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      accentColor: "text-green-600"
    },
    {
      id: 2,
      name: "Passion Agro Pakistan",
      established: "Since Inception",
      tagline: "Passion for Crops, Commitment to Farmers",
      description: "Since our inception, we've been on a mission to revolutionize crop care by delivering advanced, reliable, and result-driven agrochemical solutions. From cutting-edge pesticides and herbicides to powerful fungicides and micronutrients, every product is crafted to protect crops and boost yields.",
      keyPoints: [
        "Advanced agrochemical solutions",
        "Expert advice & on-field support",
        "Trust, quality & lasting results",
        "Performance-driven products"
      ],
      icon: <FaBolt className="w-12 h-12 text-blue-600" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      accentColor: "text-blue-600"
    },
    {
      id: 3,
      name: "Passion Agro Seeds",
      established: "Research & Innovation",
      tagline: "Great Harvests Start with Great Seeds",
      description: "Passion Agro Seeds is dedicated to delivering high-quality, high-yield seed varieties that empower farmers to achieve maximum productivity. With a strong commitment to innovation and research, we offer seeds that are tailored to Pakistan's diverse climates and soil conditions.",
      keyPoints: [
        "High-quality, high-yield seed varieties",
        "Superior germination & disease resistance",
        "Technical guidance from sowing to harvest",
        "Tailored to Pakistan's diverse conditions"
      ],
      icon: <FaSeedling className="w-12 h-12 text-amber-600" />,
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
      accentColor: "text-amber-600"
    },
    {
      id: 4,
      name: "Arz E Pak",
      established: "Export Excellence",
      tagline: "Pakistan's Agricultural Pride Worldwide",
      description: "Arz E Pak specializes in exporting Pakistan's finest agricultural products to international markets. We are committed to showcasing the quality and diversity of Pakistani agriculture on the global stage, connecting local farmers with international opportunities while maintaining the highest standards of quality and freshness.",
      keyPoints: [
        "Premium export quality agricultural products",
        "International market expertise",
        "Global supply chain management",
        "Supporting local farmers internationally"
      ],
      icon: <FaGlobe className="w-12 h-12 text-purple-600" />,
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
      accentColor: "text-purple-600"
    }
  ];

  // Animation variants
  const bannerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.7, ease: 'easeOut' }
    })
  };
  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 8, transition: { type: 'spring', stiffness: 300 } }
  };
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gray-50">
        {/* Banner Section */}
        <motion.div
          className="relative h-72 sm:h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 400\"><defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:%2334D399;stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:%2310B981;stop-opacity:1\" /></linearGradient></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23grad1)\"/><path d=\"M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z\" fill=\"%23065F46\" opacity=\"0.3\"/><circle cx=\"200\" cy=\"150\" r=\"20\" fill=\"%23FFFFFF\" opacity=\"0.1\"/><circle cx=\"800\" cy=\"120\" r=\"15\" fill=\"%23FFFFFF\" opacity=\"0.1\"/><circle cx=\"1000\" cy=\"180\" r=\"25\" fill=\"%23FFFFFF\" opacity=\"0.1\"/></svg>')`
          }}
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center text-white px-2 sm:px-4 max-w-4xl w-full mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-2 sm:gap-6">
              <FaLeaf className="w-12 sm:w-16 h-12 sm:h-16 text-green-400 mr-0 sm:mr-4" />
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Group Companies</h1>
            </div>
            <p className="text-base sm:text-xl md:text-2xl font-light leading-relaxed opacity-90">
              Empowering Pakistan's Agricultural Future Through Innovation, Quality, and Commitment
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-4 sm:gap-8">
              <div className="flex items-center">
                <FaAward className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400 mr-2" />
                <span className="text-base sm:text-lg">20+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400 mr-2" />
                <span className="text-base sm:text-lg">Trusted by Farmers</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Companies Section */}
        <div className="py-10 sm:py-20 px-2 sm:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Our Family of Companies</h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Four specialized companies working together to provide comprehensive agricultural solutions 
                across Pakistan's farming community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:gap-12">
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  className={`${company.bgColor} rounded-3xl shadow-xl overflow-hidden`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="p-4 sm:p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                      {/* Company Icon & Header */}
                      <motion.div
                        className="flex-shrink-0 mb-4 lg:mb-0"
                        variants={iconVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="hover"
                        style={{ display: 'inline-block' }}
                      >
                        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg flex items-center justify-center">
                          {company.icon}
                        </div>
                      </motion.div>

                      {/* Company Info */}
                      <div className="flex-grow w-full">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                          <h3 className="text-xl sm:text-3xl font-bold text-gray-800">{company.name}</h3>
                          <span className={`px-2 sm:px-4 py-1 sm:py-2 ${company.accentColor} bg-white rounded-full text-xs sm:text-sm font-semibold shadow-md`}>
                            Est. {company.established}
                          </span>
                        </div>
                        
                        <p className={`text-base sm:text-xl font-semibold ${company.accentColor} mb-2 sm:mb-6`}>
                          {company.tagline}
                        </p>

                        <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-8">
                          {company.description}
                        </p>

                        {/* Key Points */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                          {company.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2 sm:gap-3 bg-white bg-opacity-60 rounded-xl p-2 sm:p-4 shadow-sm">
                              <FaCheckCircle className={`w-5 sm:w-6 h-5 sm:h-6 ${company.accentColor} flex-shrink-0 mt-0.5`} />
                              <span className="text-gray-700 text-xs sm:text-base font-medium">{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stats or Additional Info */}
                        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-white border-opacity-40">
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaChartLine className={`w-4 sm:w-5 h-4 sm:h-5 ${company.accentColor}`} />
                            <span className="text-gray-700 text-xs sm:text-base font-medium">Proven Results</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaStar className={`w-4 sm:w-5 h-4 sm:h-5 ${company.accentColor}`} />
                            <span className="text-gray-700 text-xs sm:text-base font-medium">Premium Quality</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <FaBullseye className={`w-4 sm:w-5 h-4 sm:h-5 ${company.accentColor}`} />
                            <span className="text-gray-700 text-xs sm:text-base font-medium">Farmer Focused</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="relative h-1 sm:h-2 bg-gradient-to-r from-transparent via-white via-white to-transparent opacity-40"></div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <motion.div
              className="text-center mt-10 sm:mt-20"
              variants={ctaVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-6 sm:p-12 text-white shadow-2xl">
                <div className="flex flex-row justify-center mb-4 sm:mb-6 gap-2 sm:gap-4">
                  <FaLeaf className="w-8 sm:w-12 h-8 sm:h-12 text-green-300" />
                  <FaSeedling className="w-8 sm:w-12 h-8 sm:h-12 text-yellow-300" />
                  <FaShieldAlt className="w-8 sm:w-12 h-8 sm:h-12 text-blue-300" />
                  <FaGlobe className="w-8 sm:w-12 h-8 sm:h-12 text-purple-300" />
                </div>
                <h3 className="text-xl sm:text-4xl font-bold mb-2 sm:mb-4">Growing Together, Growing Strong</h3>
                <p className="text-base sm:text-xl opacity-90 max-w-3xl mx-auto">
                  Join thousands of farmers across Pakistan who trust our group companies for their 
                  agricultural needs. Together, we're building a more productive and sustainable future.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Companies;