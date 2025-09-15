import React, { useState } from "react";
import wheatImg from "../assets/crops/wheat.jpg";
import riceImg from "../assets/crops/rice.jpg";
import cottonImg from "../assets/crops/cotton.jpg";
import sugarcaneImg from "../assets/crops/sugarcane.jpeg";
import maizeImg from "../assets/crops/maize.webp";
import potatoImg from "../assets/crops/potato.webp";
import agrolixLogo from "../assets/homepage/logo-images/agrolix-group.png";
import {
  FaSeedling,
  FaLeaf,
  FaDollarSign,
  FaGlobeAmericas,
  FaIndustry,
  FaUsers,
  FaChartLine,
  FaMapMarkerAlt,
  FaArrowRight,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Crops = () => {
  const [expandedCrop, setExpandedCrop] = useState(null);

  const crops = [
    {
      id: 1,
      name: "Wheat",
      emoji: "🌾",
      tagline: "The Nation's Staple Grain",
      image: wheatImg,
      color: "from-amber-500 to-yellow-600",
      bgColor: "bg-amber-50",
      description:
        "Wheat stands as Pakistan's most crucial food crop, occupying the largest cultivated area and holding paramount importance in national food security.",
      fullContent:
        "Wheat stands as Pakistan's most crucial food crop, occupying the largest cultivated area and holding paramount importance in national food security. This golden grain is primarily cultivated as a Rabi (winter) crop across the fertile plains of Punjab and Sindh provinces, with significant production also occurring in Khyber Pakhtunkhwa and Balochistan.",
      highlights: [
        "Dominates agricultural landscape in both acreage and total production",
        "Spring wheat varieties are predominantly grown from November to April",
        "Annual wheat imports of approximately 2 million tons",
        "Critical for food security, directly impacting bread prices",
      ],
      stats: {
        ranking: "1st",
        type: "Food Crop",
        season: "Rabi (Winter)",
        provinces: "Punjab, Sindh, KPK, Balochistan",
      },
    },
    {
      id: 2,
      name: "Rice",
      emoji: "🍚",
      tagline: "The Export Champion",
      image: riceImg,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      description:
        "Rice cultivation represents one of Pakistan's greatest agricultural success stories, serving as both a vital food source and a major export commodity.",
      fullContent:
        "Rice cultivation represents one of Pakistan's greatest agricultural success stories, serving as both a vital food source and a major export commodity. The crop thrives in the irrigated regions of Punjab, Sindh, and select areas of Balochistan, where it provides livelihoods for millions of farming families.",
      highlights: [
        "Major contributor to Pakistan's foreign exchange earnings",
        "World-renowned Basmati varieties offer exceptional aroma and flavor",
        "Employs millions in rural communities",
        "Strong international demand in Middle Eastern and European markets",
      ],
      stats: {
        ranking: "2nd",
        type: "Food & Export Crop",
        season: "Kharif (Summer)",
        provinces: "Punjab, Sindh, Balochistan",
      },
    },
    {
      id: 3,
      name: "Cotton",
      emoji: "🌱",
      tagline: "The White Gold",
      image: cottonImg,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      description:
        "Cotton holds the distinction of being Pakistan's premier cash crop and industrial raw material, making it a cornerstone of the national economy.",
      fullContent:
        "Cotton holds the distinction of being Pakistan's premier cash crop and industrial raw material. As the world's sixth-largest cotton producer, Pakistan has built a substantial textile industry around this versatile fiber, making it a cornerstone of the national economy.",
      highlights: [
        "World's 6th largest cotton producer",
        "Asia's 3rd largest cotton spinning capacity",
        "Supports approximately 1.5 million smallholder farmers",
        "Primary raw material for Pakistan's massive textile industry",
      ],
      stats: {
        ranking: "1st",
        type: "Cash Crop",
        season: "Kharif (Summer)",
        provinces: "Punjab, Sindh",
      },
    },
    {
      id: 4,
      name: "Sugarcane",
      emoji: "🎋",
      tagline: "The Sweet Success Story",
      image: sugarcaneImg,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      description:
        "Sugarcane cultivation has evolved into a vital component of Pakistan's agricultural economy, serving multiple industrial purposes beyond sugar production.",
      fullContent:
        "Sugarcane cultivation has evolved into a vital component of Pakistan's agricultural economy, serving multiple industrial purposes beyond sugar production. This tall, sweet crop has shown consistent growth in production and continues to expand its industrial applications.",
      highlights: [
        "Primary source for domestic sugar production",
        "Raw material for paper manufacturing and chipboard production",
        "Essential input for confectionery and chemical industries",
        "Bagasse utilized in paper mills and bioenergy production",
      ],
      stats: {
        ranking: "Major",
        type: "Cash Crop",
        season: "Annual",
        provinces: "Punjab, Sindh",
      },
    },
    {
      id: 5,
      name: "Maize",
      emoji: "🌽",
      tagline: "The Golden Opportunity",
      image: maizeImg,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      description:
        "Maize has emerged as Pakistan's third most significant cereal crop, earning recognition as 'the other gold' due to its remarkable versatility.",
      fullContent:
        "Maize has emerged as Pakistan's third most significant cereal crop, earning recognition as 'the other gold' due to its remarkable versatility and industrial potential. This adaptable crop offers exceptional yields per acre and diverse utilization options.",
      highlights: [
        "Third most important cereal crop after wheat and rice",
        "Triple-purpose crop: food, animal feed, and industrial raw material",
        "Exceptional per-acre productivity",
        "Industrial applications include starch production and biofuel",
      ],
      stats: {
        ranking: "3rd",
        type: "Cereal Crop",
        season: "Kharif & Rabi",
        provinces: "All Provinces",
      },
    },
    {
      id: 6,
      name: "Potato",
      emoji: "🥔",
      tagline: "The Underground Treasure",
      image: potatoImg,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      description:
        "Potato cultivation has gained tremendous momentum, establishing itself as the fourth most important crop nationally with exceptional nutritional benefits.",
      fullContent:
        "Potato cultivation has gained tremendous momentum among Pakistani farmers, who increasingly recognize the value of high-quality, certified seed varieties. This nutritious tuber has established itself as the fourth most important crop nationally, offering exceptional nutritional and economic benefits.",
      highlights: [
        "Fourth-ranking crop after wheat, rice, and maize",
        "Rich source of starch, vitamins, minerals, and proteins",
        "Superior per-unit-area yields compared to most crops",
        "Growing demand in fast-food and snack industries",
      ],
      stats: {
        ranking: "4th",
        type: "Food Crop",
        season: "Rabi",
        provinces: "Punjab, Balochistan, KPK",
      },
    },
  ];

  const toggleExpand = (cropId) => {
    setExpandedCrop(expandedCrop === cropId ? null : cropId);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-12 py-8 md:py-12 px-4 md:px-10 lg:px-16 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-2xl md:rounded-3xl shadow-md overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-green-100 rounded-full opacity-30 blur-2xl z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-green-200 rounded-full opacity-20 blur-2xl z-0"></div>
              {/* Left: Logo */}
              <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0">
                <img
                  src={agrolixLogo}
                  alt="Agrolix Group Logo"
                  className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
              </div>
              {/* Right: Content */}
              <div className="flex flex-col justify-center items-start w-full md:w-2/3 z-10">
                <h1 className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] drop-shadow-lg leading-tight mb-3 md:mb-5 text-left">
                  Major Crops of Pakistan
                </h1>
                <p className="text-base xs:text-lg md:text-2xl text-[#7a9955] font-semibold mb-2 tracking-wide text-left max-w-xl">
                  Pakistan's agricultural sector forms the backbone of its economy
                </p>
                <span className="block w-16 md:w-32 h-1 bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] rounded-full mb-2"></span>
                <span className="text-[#7a9955] text-xs md:text-sm italic text-left">
                  Contributing to food security, GDP & rural prosperity
                </span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-5 rounded-xl shadow flex flex-col items-center hover:scale-105 transition-transform">
                <div className="bg-blue-200 p-3 rounded-full mb-3 shadow">
                  <FaGlobeAmericas className="w-7 h-7 text-blue-700" />
                </div>
                <p className="text-base font-bold text-blue-800 mb-1">Export Power</p>
                <p className="text-xs text-blue-600 text-center">Major crops drive Pakistan's global exports, especially rice & cotton.</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-5 rounded-xl shadow flex flex-col items-center hover:scale-105 transition-transform">
                <div className="bg-green-200 p-3 rounded-full mb-3 shadow">
                  <FaUsers className="w-7 h-7 text-green-700" />
                </div>
                <p className="text-base font-bold text-green-800 mb-1">Rural Livelihood</p>
                <p className="text-xs text-green-600 text-center">Millions of families depend on agriculture for income and jobs.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-50 p-5 rounded-xl shadow flex flex-col items-center hover:scale-105 transition-transform">
                <div className="bg-purple-200 p-3 rounded-full mb-3 shadow">
                  <FaIndustry className="w-7 h-7 text-purple-700" />
                </div>
                <p className="text-base font-bold text-purple-800 mb-1">Industrial Backbone</p>
                <p className="text-xs text-purple-600 text-center">Crops like cotton & sugarcane fuel Pakistan's textile and food industries.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-yellow-50 p-5 rounded-xl shadow flex flex-col items-center hover:scale-105 transition-transform">
                <div className="bg-orange-200 p-3 rounded-full mb-3 shadow">
                  <FaChartLine className="w-7 h-7 text-orange-700" />
                </div>
                <p className="text-base font-bold text-orange-800 mb-1">Economic Growth</p>
                <p className="text-xs text-orange-600 text-center">Agriculture is a key engine for GDP growth and national prosperity.</p>
              </div>
            </div>
          </div>

          {/* Crops Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 md:px-8 xl:px-16">
            {crops.map((crop) => (
              <div
                key={crop.id}
                className={`${crop.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                {/* Card Header with Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${crop.color} opacity-30`}
                  ></div>

                  {/* Crop Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <span className="text-4xl mr-3">{crop.emoji}</span>
                      <div>
                        <h3 className="text-2xl font-bold">{crop.name}</h3>
                        <p className="text-sm opacity-90">{crop.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-full">
                      <FaLeaf className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <FaChartLine className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">
                          Ranking
                        </span>
                      </div>
                      <p className="font-bold text-gray-800">
                        {crop.stats.ranking}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <FaSeedling className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">
                          Type
                        </span>
                      </div>
                      <p className="font-bold text-gray-800">
                        {crop.stats.type}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <FaLeaf className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">
                          Season
                        </span>
                      </div>
                      <p className="font-bold text-gray-800">
                        {crop.stats.season}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="flex items-center mb-1">
                        <FaMapMarkerAlt className="w-4 h-4 text-gray-600 mr-2" />
                        <span className="text-xs font-semibold text-gray-600 uppercase">
                          Regions
                        </span>
                      </div>
                      <p className="font-bold text-gray-800 text-sm">
                        {crop.stats.provinces}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {expandedCrop === crop.id
                        ? crop.fullContent
                        : crop.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  {expandedCrop === crop.id && (
                    <div className="mb-6 animate-fadeIn">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <FaDollarSign className="w-4 h-4 mr-2 text-green-600" />
                        Key Highlights
                      </h4>
                      <div className="space-y-2">
                        {crop.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start">
                            <FaArrowRight className="w-3 h-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                            <p className="text-sm text-gray-700">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleExpand(crop.id)}
                      className={`flex-1 bg-gradient-to-r ${crop.color} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center`}
                    >
                      {expandedCrop === crop.id ? (
                        <>
                          <FaCompress className="w-4 h-4 mr-2" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <FaExpand className="w-4 h-4 mr-2" />
                          Learn More
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <FaGlobeAmericas className="w-8 h-8 text-[#7a9955] mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">
                  Agricultural Excellence
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Pakistan's agricultural diversity and productivity continue to
                evolve, with each major crop contributing uniquely to food
                security, economic stability, and rural prosperity.
              </p>
              <p className="text-sm text-gray-500">
                The success of these crops depends on continued investment in
                research, irrigation infrastructure, and farmer education.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Crops;
