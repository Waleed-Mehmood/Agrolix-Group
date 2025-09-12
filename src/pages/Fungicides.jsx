import React from "react";
import DiZebImg from "../assets/products/fungicides/Di-Zeb.png";
import RexcelImg from "../assets/products/fungicides/Rexcel.jpeg";
import PivotImg from "../assets/products/fungicides/Pivot.png";
import AzonilImg from "../assets/products/fungicides/Azonil.jpeg";
import CymancoImg from "../assets/products/fungicides/Cymanco.jpeg";
import LateeVoImg from "../assets/products/fungicides/Latee-vo.jpg";
import StartegyImg from "../assets/products/fungicides/Startegy.jpeg";
import ConverterImg from "../assets/products/fungicides/Converter.jpeg";
import SulmefonImg from "../assets/products/fungicides/Sulmefon.jpeg";
import {
  FaTint,
  FaLeaf,
  FaBug,
  FaFlask,
  FaCrosshairs,
  FaTree,
  FaSeedling,
  FaAppleAlt,
  FaBolt,
  FaAtom,
  FaVial,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { useState } from "react";

const Fungicides = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState("");
  const [zoom, setZoom] = useState(1);
  const fungicides = [
    {
      id: 1,
      name: "Di-Zeb",
      composition: "Dimethomorph + Mancozeb 50% WP",
      crop: "Potato",
      pest: "Early & Late Blight, Downy Mildew",
      dose: "250 g",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-green-500 to-green-600",
      icon: <FaLeaf className="w-12 h-12" />,
      image: DiZebImg,
    },
    {
      id: 2,
      name: "Rexcel",
      composition: "Sulphur 80% WG",
      crop: "All Crops",
      pest: "Powdery Mildew, Mites (also nutrition source)",
      dose: "2 kg",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-yellow-500 to-yellow-600",
      icon: <FaTree className="w-12 h-12" />,
      image: RexcelImg,
    },
    {
      id: 3,
      name: "Pivot",
      composition: "Pyraclostrobin + Dimethomorph 18.7% WG",
      crop: "Potato",
      pest: "Downy Mildew, Late Blight",
      dose: "250 g",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-blue-500 to-blue-600",
      icon: <FaCrosshairs className="w-12 h-12" />,
      image: PivotImg,
    },
    {
      id: 4,
      name: "Azonil",
      composition: "Azoxystrobin + Chlorothalonil 56% SC",
      crop: "Potato, Tomato, Cucumber",
      pest: "Leaf Spot, Rust, Downy Mildew, Early & Late Blight",
      dose: "250 – 350 ML",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-purple-500 to-purple-600",
      icon: <FaTint className="w-12 h-12" />,
      image: AzonilImg,
    },
    {
      id: 5,
      name: "Cymanco",
      composition: "Cymoxanil + Mancozeb 72% WP",
      crop: "Potato, Tomato, Musk Melon",
      pest: "Late Blight, Downy Mildew",
      dose: "600 g",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-pink-500 to-pink-600",
      icon: <FaAppleAlt className="w-12 h-12" />,
      image: CymancoImg,
    },
    {
      id: 6,
      name: "Latee-Vo",
      composition: "Trifloxystrobin + Tebuconazole 75% WG",
      crop: "Fruits, Vegetables, Orchards",
      pest: "Brown Leaf Spot, Leaf Blast, Sheath Blight, Powdery Mildew",
      dose: "65 g",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-red-500 to-red-600",
      icon: <FaBug className="w-12 h-12" />,
      image: LateeVoImg,
    },
    {
      id: 7,
      name: "Strategy",
      composition: "Chlorothalonil + Pyrimethanil 40% SC",
      crop: "Potato",
      pest: "Early & Late Blight",
      dose: "500 ML",
      color: "from-[#a4c67a] to-[#a4c67a]",
     bgcolor: "from-indigo-500 to-indigo-600",
      icon: <FaBolt className="w-12 h-12" />,
      image: StartegyImg,
    },
    {
      id: 8,
      name: "Converter",
      composition: "Azoxystrobin + Tebuconazole 50% SC",
      crop: "Fruits, Vegetables, Wheat",
      pest: "Rust, Powdery Mildew, Early Blight",
      dose: "200 ML",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-teal-500 to-teal-600",
      icon: <FaFlask className="w-12 h-12" />,
      image: ConverterImg,
    },
    {
      id: 9,
      name: "Sulmefon",
      composition: "Sulphur + Tridemifon 50% SC",
      crop: "Wheat, Orchards, Vegetables",
      pest: "Powdery Mildew, Scab, Rust, Leaf Spot",
      dose: "800 ML",
      color: "from-[#a4c67a] to-[#a4c67a]",
      bgcolor: "from-orange-500 to-orange-600",
      icon: <FaSeedling className="w-12 h-12" />,
      image: SulmefonImg,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-6 px-2 sm:py-8 sm:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="relative text-center mb-8 sm:mb-12 py-6 sm:py-10 px-2 sm:px-4 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-2xl sm:rounded-3xl shadow-md overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-100 rounded-full opacity-30 blur-2xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-2xl z-0"></div>
            <div className="relative flex flex-col sm:flex-row items-center justify-center mb-4 z-10 gap-2 sm:gap-4">
              <div className="bg-gradient-to-br from-[#dcfab8] to-[#a4c67a] p-3 sm:p-4 rounded-full shadow-lg animate-spin-slow mb-2 sm:mb-0">
                <FaLeaf className="w-8 h-8 sm:w-10 sm:h-10 text-[#7a9955]" />
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a4c67a] via-[#96be64] to-[#a4c67a] drop-shadow-lg">
                Fungicides Collection
              </h1>
            </div>
            <div className="flex flex-col items-center z-10 relative">
              <p className="text-lg sm:text-2xl text-[#a4c67a] font-semibold mb-2 tracking-wide">
                Premium Plant Protection Solutions
              </p>
              <span className="block w-20 sm:w-32 h-1 bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] rounded-full mb-2"></span>
              <span className="text-[#a4c67a] text-xs sm:text-sm italic">
                Trusted by professionals & farmers
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            {fungicides.map((fungicide) => (
              <div
                key={fungicide.id}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Product Image Section */}
                <div
                  className="relative h-48 sm:h-64 overflow-hidden cursor-pointer"
                  onClick={() => {
                    setModalImg(fungicide.image);
                    setModalAlt(fungicide.name);
                    setZoom(1);
                    setModalOpen(true);
                  }}
                >
                  <img
                    src={fungicide.image}
                    alt={fungicide.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 bg-white"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${fungicide.bgcolor} opacity-20`}
                  ></div>
                </div>
                {/* Image Popup Modal */}
                {modalOpen && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2 sm:px-0"
                    onClick={() => setModalOpen(false)}
                  >
                    <div
                      className="relative w-full max-w-md sm:max-w-xl md:max-w-2xl mx-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className="absolute top-2 right-2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-80 hover:bg-opacity-100 text-white text-3xl font-bold shadow-lg transition"
                        onClick={() => setModalOpen(false)}
                        aria-label="Close"
                        style={{ lineHeight: 1 }}
                      >
                        &times;
                      </button>
                      {/* Zoom Controls */}
                      <div className="absolute top-2 left-2 flex flex-col gap-2 z-10">
                        <button
                          className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 shadow"
                          onClick={() => setZoom((z) => Math.min(z + 0.2, 3))}
                          title="Zoom In"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                        <button
                          className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 shadow"
                          onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
                          title="Zoom Out"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <button
                          className="bg-white bg-opacity-80 hover:bg-opacity-100 text-black rounded-full p-2 shadow"
                          onClick={() => setZoom(1)}
                          title="Reset Zoom"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center justify-center min-h-[40vh] sm:min-h-[60vh]">
                        <img
                          src={modalImg}
                          alt={modalAlt}
                          style={{
                            transform: `scale(${zoom})`,
                            transition: "transform 0.2s",
                          }}
                          className="w-full max-h-[60vh] sm:max-h-[80vh] object-contain rounded-lg shadow-2xl border-4 border-white bg-white"
                        />
                      </div>
                      <div className="text-center text-white mt-4 text-base sm:text-lg font-semibold">
                        {modalAlt}
                      </div>
                    </div>
                  </div>
                )}

                {/* Product Details Section */}
                <div className="p-4 sm:p-6">
                  {/* Product Name */}
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {fungicide.name}
                    </h3>
                    <div
                      className={`h-1 w-16 bg-gradient-to-r ${fungicide.color} rounded-full`}
                    ></div>
                  </div>

                  {/* Composition */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center mb-2">
                      <FaTint className="w-4 h-4 text-blue-600 mr-2" />
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Composition
                      </h4>
                    </div>
                    <p className="text-gray-800 text-sm bg-gray-50 p-3 rounded-lg border-l-4 border-blue-300">
                      {fungicide.composition}
                    </p>
                  </div>

                  {/* Target Crops */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center mb-2">
                      <FaTree className="w-4 h-4 text-green-600 mr-2" />
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Target Crops
                      </h4>
                    </div>
                    <p className="text-gray-800 font-medium">
                      {fungicide.crop}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <FaBug className="w-4 h-4 text-red-600 mr-2" />
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Controls
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {fungicide.pest}
                    </p>
                  </div>

                  {/* Recommended Dose */}
                  <div className="mb-2">
                    <div className="flex items-center mb-2">
                      <FaCrosshairs className="w-4 h-4 text-purple-600 mr-2" />
                      <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        Recommended Dose
                      </h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {fungicide.dose}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-10 sm:mt-16">
            <div className="bg-white rounded-lg p-4 sm:p-8 shadow-md">
              <FaAtom className="w-10 h-10 sm:w-12 sm:h-12 text-[#7a9955] mx-auto mb-4" />
              <p className="text-gray-600 text-base sm:text-lg font-medium">
                Professional plant protection solutions for optimal crop health
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                Trusted by farmers worldwide for effective disease control
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fungicides;
