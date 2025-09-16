// Slider.js
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import slide1 from "../assets/homepage/banners/banner1.jpg";
import slide2 from "../assets/homepage/banners/banner2.jpg";
import slide3 from "../assets/homepage/banners/banner3.jpg";
import slide4 from "../assets/homepage/banners/banner4.jpg";
import slide5 from "../assets/homepage/banners/banner5.jpg";


const slides = [
  { bg: slide1 },
  { bg: slide2 },
  { bg: slide3 },
  { bg: slide4 },
  { bg: slide5 }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slide Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <img
              src={slide.bg}
              alt={`slide-${index}`}
              className="w-full h-full object-cover brightness-75"
              style={{ maxWidth: '100vw', width: '100vw', minWidth: '100vw', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 hidden sm:block"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 hidden sm:block"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`dot-indicator rounded-full cursor-pointer transition-all duration-200
              ${index === currentIndex ? "bg-white" : "bg-gray-400"}
              w-2 h-2 sm:w-3 sm:h-3
            `}
          ></div>
        ))}
        <style>{`
          @media (max-width: 640px) {
            .dot-indicator {
              width: 8px !important;
              height: 8px !important;
            }
          }
          @media (max-width: 480px) {
            .dot-indicator {
              width: 6px !important;
              height: 6px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default HeroSection;
