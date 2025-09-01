import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Muhammad Ashraf",
      location: "Faisalabad, Punjab",
      profession: "Cotton Farmer",
  image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=facearea&w=128&q=80", // Male (Muhammad Ashraf)
      rating: 5,
  review: "Agrolix Group's pesticides saved my cotton crop from bollworm. This year, my yield increased by 40%.",
      cropType: "Cotton",
      acres: "50 acres"
    },
    {
      id: 2,
      name: "Ahmed Khan",
      location: "Sheikhupura, Punjab",
      profession: "Wheat Farmer",
  image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=128&q=80", // Male
      rating: 5,
  review: "Agrolix's wheat seeds and fertilizers have greatly improved my crop quality. I am getting the best price in the market.",
      cropType: "Wheat",
      acres: "100 acres"
    },
    {
      id: 3,
      name: "Fatima Bibi",
      location: "Gujranwala, Punjab",
      profession: "Vegetable Farmer",
  image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&q=80", // Female
      rating: 5,
  review: "Agrolix's organic fertilizers have given amazing results in my vegetable farming. Both quality and quantity have improved.",
      cropType: "Vegetables",
      acres: "15 acres"
    },
    {
      id: 4,
      name: "Malik Usman",
      location: "Kasur, Punjab",
      profession: "Rice Farmer",
  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&w=128&q=80", // Male (Malik Usman)
      rating: 5,
  review: "Agrolix's products are the best for pest control in rice farming. The field team's guidance gave proper results.",
      cropType: "Rice",
      acres: "80 acres"
    },
    {
      id: 5,
      name: "Zainab Ali",
      location: "Okara, Punjab",
      profession: "Progressive Farmer",
  image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&q=80", // Female
      rating: 5,
  review: "With modern farming techniques and Agrolix's innovative products, my farming profitability has doubled.",
      cropType: "Mixed Crops",
      acres: "200 acres"
    },
    {
      id: 6,
      name: "Hassan Mahmood",
      location: "Sahiwal, Punjab",
      profession: "Dairy Farmer",
  image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&q=80", 
      rating: 5,
      review: "Agrolix Group ki fodder crops ke seeds se mere cattle ki health aur milk production dono improve hua hai.",
      cropType: "Fodder",
      acres: "60 acres"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
      />
    ));
  };

  // Custom Arrows for Slick
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-green-600 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110 z-10 border border-green-200"
        aria-label="Next"
      >
        <FaChevronRight size={16} />
      </button>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-green-600 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 shadow-lg hover:scale-110 z-10 border border-green-200"
        aria-label="Previous"
      >
        <FaChevronLeft size={16} />
      </button>
    );
  };

  // Window size state for forcing re-render
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 1024 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
    appendDots: dots => (
      <div className="flex justify-center gap-2 mt-8">
        {dots}
      </div>
    ),
    customPaging: i => (
      <button className="h-2 rounded-full transition-all duration-300 bg-gray-300 w-2 slick-dot-btn" />
    ),
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Section Header */}
  <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FaStar className="text-yellow-500" />
            Customer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Farmers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Success stories from Pakistani farmers who trust Agrolix Group 
            for their agricultural solutions.
          </p>
        </div>

        {/* Quick Stats */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
            <div className="text-2xl font-bold text-green-600">5000+</div>
            <div className="text-sm text-gray-600">Happy Farmers</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
            <div className="text-2xl font-bold text-green-600">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
            <div className="text-2xl font-bold text-green-600">150K+</div>
            <div className="text-sm text-gray-600">Acres Served</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-green-100">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="px-0 sm:px-4 md:px-8 lg:px-12">
            <Slider {...settings} key={windowWidth}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex flex-col h-full">
                  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group h-full flex flex-col justify-between min-h-[340px] sm:min-h-[360px] md:min-h-[380px]">
                    {/* Quote Icon */}
                    <div className="text-green-200 mb-3 sm:mb-4">
                      <FaQuoteLeft size={24} />
                    </div>
                    {/* Rating */}
                    <div className="flex gap-1 mb-3 sm:mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                      "{testimonial.review}"
                    </p>
                    {/* Customer Info */}
                    <div className="flex items-center gap-2 sm:gap-3 border-t border-gray-100 pt-3 sm:pt-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-lg sm:text-xl flex-shrink-0 overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-xs sm:text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-green-600 text-xs font-medium">
                          {testimonial.profession}
                        </p>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <FaMapMarkerAlt size={10} />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    {/* Farm Details */}
                    <div className="mt-2 sm:mt-3 bg-green-50 p-2 sm:p-3 rounded-lg">
                      <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs">
                        <div>
                          <span className="text-gray-500">Crop:</span>
                          <span className="font-medium text-green-700 ml-1">{testimonial.cropType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Farm:</span>
                          <span className="font-medium text-green-700 ml-1">{testimonial.acres}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialsSection;