import React, { useState } from "react";
import {
  FaSeedling,
  FaLeaf,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaGlobeAmericas,
  FaMicroscope,
  FaHandshake,
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaHeart,
  FaFlask,
  FaIndustry,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import passionAgroLogo from "../assets/homepage/logo-images/agro-passion-seeds.png";
import Footer from "../components/Footer";

const Seeds = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const companyValues = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge technology and research-driven solutions",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and premium seed standards",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Farmer Success",
      description: "Dedicated to empowering farming communities",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Sustainability",
      description: "Building a greener agricultural future",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const achievements = [
    {
      icon: <FaMicroscope className="w-6 h-6" />,
      title: "Research-Based Varieties",
      description: "Superior seed genetics through advanced research",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "High-Yielding Seeds",
      description: "Maximum productivity and profitability",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Disease Resistance",
      description: "Enhanced protection against crop diseases",
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Better Germination",
      description: "Consistent and reliable seed performance",
    },
  ];

  const seedImages = [
    {
      url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
      title: "Premium Wheat Seeds",
    },
    {
      url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
      title: "Quality Rice Varieties",
    },
    {
      url: "https://images.unsplash.com/photo-1703495330144-0ab603d059ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdHRvbiUyMHNlZWRzfGVufDB8fDB8fHww",
      title: "Advanced Cotton Seeds",
    },
    {
      url: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop",
      title: "Hybrid Maize Seeds",
    },
    {
      url: "https://images.unsplash.com/photo-1557844352-761f2565b576?w=400&h=300&fit=crop",
      title: "Vegetable Seeds",
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      title: "Sunflower Seeds",
    },
  ];

  return (
  <div>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
    {/* Hero Section */}
    <div className="mb-16 px-4 md:px-8 lg:px-12 mt-12">
      <div className="relative flex flex-col md:flex-row items-center justify-between mb-8 sm:mb-12 py-8 md:py-12 px-4 md:px-10 lg:px-16 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-2xl md:rounded-3xl shadow-md overflow-hidden">
      <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-green-100 rounded-full opacity-30 blur-2xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-green-200 rounded-full opacity-20 blur-2xl z-0"></div>

      {/* Left: Image */}
      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src={passionAgroLogo}
          alt="Passion Agro Seeds Logo"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col justify-center items-start w-full md:w-2/3 z-10">
        <h1 className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] drop-shadow-lg leading-tight mb-3 md:mb-5 text-left">
        Passion Agro Seeds
        </h1>
        <p className="text-base xs:text-lg md:text-2xl text-[#7a9955] font-semibold mb-2 tracking-wide text-left max-w-xl">
        Trusted agricultural partner delivering high-quality seeds
        </p>
        <span className="block w-16 md:w-32 h-1 bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] rounded-full mb-2"></span>
        <span className="text-[#7a9955] text-xs md:text-sm italic text-left">
        Maximum productivity and profitability for farmers
        </span>
      </div>
      </div>
    </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
          {/* Company Introduction */}
          <div className="mb-20 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    About Passion Agro Seeds
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    Passion Agro Seeds is a{" "}
                    <span className="font-semibold text-[#7a9955]">
                      trusted name in the agricultural sector
                    </span>
                    , dedicated to delivering high-quality seeds that empower
                    farmers to achieve maximum productivity and profitability.
                    Established with a vision to revolutionize modern farming
                    practices, we specialize in providing reliable,
                    research-based, and high-yielding seed varieties for a wide
                    range of crops.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Our commitment to{" "}
                    <span className="font-semibold text-[#7a9955]">
                      innovation, quality assurance, and farmer success
                    </span>{" "}
                    has positioned us as a growing leader in the seed industry.
                    At Passion Agro Seeds, we believe that
                    <span className="font-semibold text-[#7a9955]">
                      {" "}
                      every seed carries the potential to transform lives
                    </span>
                    .
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    With a strong focus on{" "}
                    <span className="font-semibold text-[#7a9955]">
                      technology, sustainability, and farmer-centric solutions
                    </span>
                    , we continuously strive to bring superior seed genetics
                    that ensure better germination, improved disease resistance,
                    and higher yields. Together with our farming community, we
                    are sowing the seeds of progress for a
                    <span className="font-semibold text-[#7a9955]">
                      {" "}
                      greener and more prosperous future
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=300&fit=crop"
                      alt="Agricultural Research"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover hover:shadow-xl transition-shadow duration-300"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&h=300&fit=crop"
                      alt="Seed Quality Testing"
                      className="rounded-2xl shadow-lg w-full h-32 object-cover hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img
                      src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VlZHN8ZW58MHx8MHx8fDA%3D"
                      alt="Farming Success"
                      className="rounded-2xl shadow-lg w-full h-32 object-cover hover:shadow-xl transition-shadow duration-300"
                    />
                    <img
                      src="https://media.istockphoto.com/id/2156768417/photo/womans-hand-holding-seeds-planting-seeds-gardening-sowing-seeds-in-pots-organic-farming.webp?a=1&b=1&s=612x612&w=0&k=20&c=F7zwtrKspXWjm0VO02ylkpzCs8K3PAk4I5gtU05Moe0="
                      alt="Seed Development"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-[#7a9955] text-white p-6 rounded-2xl shadow-2xl">
                  <FaTrophy className="w-8 h-8 mb-2" />
                  <p className="font-bold text-lg">Industry Leader</p>
                  <p className="text-sm opacity-90">Growing Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center mb-4">
                <FaStar className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 mr-3 md:mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Our Core Values
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                The principles that drive our commitment to agricultural
                excellence
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`bg-gradient-to-r ${value.color} text-white p-6 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Seeds Gallery */}
          <div className="mb-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex items-center justify-center mb-4">
                <FaSeedling className="w-6 h-6 md:w-8 md:h-8 text-[#7a9955] mr-3 md:mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Our Seed Varieties
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                High-quality seeds for diverse agricultural needs and maximum
                yields
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {seedImages.map((seed, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={seed.url}
                    alt={seed.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{seed.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 md:p-16 shadow-xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full opacity-30 blur-3xl transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full opacity-30 blur-3xl transform -translate-x-32 translate-y-32"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="bg-white bg-opacity-40 backdrop-blur-sm w-24 h-24 rounded-full mx-auto mb-8 p-6 shadow-lg">
                  <FaHandshake className="w-full h-full text-[#611b74]" />
                </div>
                
                <div className="space-y-6 max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#611b74] via-[#9d49b4] to-[#611b74] ">
                    Growing Success Together
                  </h2>
                  
                  <div className="w-32 h-1 bg-gradient-to-r from-[#611b74] via-[#b354ce] to-[#611b74] mx-auto rounded-full"></div>
                  
                  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Join the growing community of successful farmers who trust Passion Agro Seeds. Together, we're cultivating prosperity and sustainability for generations to come.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                      <FaSeedling className="w-10 h-10 text-[#611b74] mx-auto mb-4" />
                      <p className="font-semibold text-[#611b74]">Premium Quality Seeds</p>
                    </div>
                    <div className="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                      <FaUsers className="w-10 h-10 text-[#611b74] mx-auto mb-4" />
                      <p className="font-semibold text-[#611b74]">Expert Support</p>
                    </div>
                    <div className="bg-white bg-opacity-60 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                      <FaChartLine className="w-10 h-10 text-[#611b74] mx-auto mb-4" />
                      <p className="font-semibold text-[#611b74]">Proven Results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Seeds;
