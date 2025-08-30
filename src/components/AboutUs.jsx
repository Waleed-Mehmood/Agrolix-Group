import React from "react";
import 'animate.css';
import aboutUsImg from "../assets/about-us/about1.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
                <path d="M12 6H0" stroke="#3dd173" strokeWidth="2" />
                <path d="M6 1L0 6L6 11" stroke="#3dd173" strokeWidth="2" />
              </svg>
              {/* Heading */}
              <h2
                className="text-[#192937] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide"
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
                style={{ minWidth: "32px", background: "#3dd173" }}
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
                    background: "#96fdbc",
                    borderColor: "#1A2A49",
                    color: "#1A2A49",
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
          {/* Right Content - Interior Image */}
          <div className="flex justify-center items-center mt-8 lg:mt-0 animate__animated animate__fadeInRight animate__delay-2s">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] w-full max-w-lg bg-white">
              <img
                src={aboutUsImg}
                alt="About Us Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
