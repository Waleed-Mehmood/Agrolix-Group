import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/homepage/banners/banner1.jpg";
import slide2 from "../assets/homepage/banners/banner2.jpg";
import slide3 from "../assets/homepage/banners/banner3.jpg";
import slide4 from "../assets/homepage/banners/banner4.jpg";
import slide5 from "../assets/homepage/banners/banner5.jpg";

const slides = [
  {
    bg: slide1
  },
  {
    bg: slide2
  },
  {
    bg: slide3
  },
  {
    bg: slide4
  },
  {
    bg: slide5
  }
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: 24, left: 0, width: "100%", zIndex: 10 }}>
        <ul
          style={{
            margin: 0,
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            padding: 0
          }}
          className="slider-dots-list"
        >
          {dots}
        </ul>
            <style>{`
              @media (max-width: 640px) {
                .slider-dots-list {
                  gap: 3px !important;
                }
                .slider-dot-custom {
                  width: 6px !important;
                  height: 6px !important;
                }
              }
              .slider-dots-list li.slick-active .slider-dot-custom {
                background: linear-gradient(135deg, #169b47 60%, #43e97b 100%) !important;
                border-color: #169b47 !important;
                box-shadow: 0 2px 12px rgba(22,155,71,0.18) !important;
              }
            `}</style>
      </div>
    ),
        customPaging: i => (
          <div
            className="slider-dot-custom"
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #f3f4f6 60%, #e0e7ef 100%)",
              border: "1.5px solid #fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              boxSizing: "border-box",
              display: "inline-block",
              transition: "all 0.3s"
            }}
          />
        )
  };

  return (
  <div className="relative w-[100vw] sm:w-full h-[35vh] sm:h-[80vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-[100vw] sm:w-full h-[25vh] sm:h-[80vh]">
            <img
              src={slide.bg}
              alt={slide.heading}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">{slide.heading}</h1>
              <p className="text-white text-lg md:text-2xl drop-shadow-md">{slide.paragraph}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
