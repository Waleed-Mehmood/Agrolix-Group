import React from "react";
import 'animate.css';
import aboutUsImg1 from "../assets/homepage/about/about1.jpg";
import aboutUsImg2 from "../assets/homepage/about/about2.jpg";
import aboutUsImg3 from "../assets/homepage/about/about3.jpg";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const aboutImages = [aboutUsImg1, aboutUsImg2, aboutUsImg3];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);

  const total = aboutImages.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="py-12 sm:py-16 bg-white animate__animated animate__fadeInUp animate__slow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="flex items-center mb-6 sm:mb-8 w-full">
              {/* Left Arrow */}
              <svg
                width="24"
                height="10"
                viewBox="0 0 32 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 sm:w-8 sm:h-3"
              >
                <path d="M12 6H0" stroke="#611b74" strokeWidth="2" />
                <path d="M6 1L0 6L6 11" stroke="#611b74" strokeWidth="2" />
              </svg>
              {/* Heading */}
              <h2
                className="text-[#a4c67a] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide"
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                ABOUT US
              </h2>
              {/* Right Line */}
              <div
                className="flex-1 ml-2 h-0.5 rounded-full"
                style={{ minWidth: "32px", background: "#611b74" }}
              ></div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Agrolix Group located in Bahawalpur has been in business since 2000, It is an agrochemical company working for a better future for the farming community and ensuring food security in our country. It was founded on the principles of Quality and Commitment which are still strong pillars of the group and will always be.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Today, the Agrolix group Consists of Agrolix Chemical Industry, Passion Agro Pakistan, Passion Agro Seeds, and a wide network of Franchises with trusted dealers under the umbrella of Arz e Pak.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Agrolix Group has a state-of-the-art office and production plants ( EC, SC, WP, WS, WDG,) we deal in all kinds of products Insecticides, Weedicides, Fungicides, Micronutrients, and Granules. 
              </p>
              <div className="pt-0">
                <Link
                  to="/about"
                  className="inline-block px-6 py-1.5 rounded-lg border"
                  style={{
                    background: "#611b74",
                    borderColor: "#1A2A49",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    boxShadow: "0 1px 2px 0 rgba(26,42,73,0.04)",
                    textDecoration: "none",
                  }}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
          {/* Right Content - Image Slider */}
          <div className="flex flex-col justify-center items-center mt-8 lg:mt-0 animate__animated animate__fadeInRight animate__delay-2s">
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] w-full max-w-lg bg-white">
              <img
                src={aboutImages[current]}
                alt={`About Us Slide ${current + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow hover:bg-opacity-100 transition"
                aria-label="Previous image"
                style={{ zIndex: 2 }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#611b74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 shadow hover:bg-opacity-100 transition"
                aria-label="Next image"
                style={{ zIndex: 2 }}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#611b74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2.5 h-2.5 rounded-full border border-[#611b74] ${current === idx ? 'bg-[#611b74]' : 'bg-white'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
