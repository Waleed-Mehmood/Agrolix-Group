import React, { useRef } from "react";
import { Link } from "react-router-dom";
import agrolixLogo from "../assets/homepage/logo-images/agrolix-chem-ind.png";
import agrolixGroupLogo from "../assets/homepage/logo-images/agrolix-group.png";
import passionagropakLogo from "../assets/homepage/logo-images/passion-agro-pak.png";
import passionSeedsLogo from "../assets/homepage/logo-images/agro-passion-seeds.png";
import arzPakLogo from "../assets/homepage/logo-images/arz-pak.png";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "animate.css";
import ceoImg from "../assets/about-us/Ceo.jpg";
import haseebImg from "../assets/about-us/haseeb-nasir.jpg";
import aboutImg from "../assets/about-us/about2.webp";
import agrolixVideo from "../assets/agrolix-video.mp4";
import {
  FaLeaf,
  FaBullseye,
  FaEye,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaAward,
  FaCheckCircle,
  FaSeedling,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  const coreValues = [
    {
      icon: FaAward,
      title: "Quality",
      description:
        "We prioritize delivering superior quality products that meet international standards. Our ISO-certified laboratories ensure every product undergoes rigorous testing to maintain excellence and reliability.",
    },
    {
      icon: FaCheckCircle,
      title: "Commitment",
      description:
        "We are deeply committed to the success and well-being of our farmers and customers.",
    },
    {
      icon: FaUsers,
      title: "Teamwork",
      description:
        "We believe in the power of collaboration and foster a culture of teamwork within our organization. By working together, we leverage diverse skills and perspectives to achieve our common goals and drive continuous improvement.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Innovation is at the heart of everything we do. Our R&D department is focused on developing cutting-edge agrochemical solutions that address the evolving needs of modern agriculture, ensuring our farmers have access to the most advanced tools available.",
    },
    {
      icon: FaShieldAlt,
      title: "Sustainability",
      description:
        "We are committed to promoting environmentally responsible practices. Our efforts are directed towards creating products that not only enhance crop yields but also minimize environmental impact, ensuring a sustainable future for agriculture.",
    },
  ];

  const companies = [
    {
      name: "Agrolix Chemical Industry",
      logo: agrolixLogo,
    },
    {
      name: "Passion Agro Pakistan",
      logo: passionagropakLogo, 
    },
    {
      name: "Passion Agro Seeds",
      logo: passionSeedsLogo,
    },
    {
      name: "Arz e Pak (Network of Franchises)",
      logo: arzPakLogo,
    },
  ];

  const products = [
    "Fungicides",
    "Herbicides",
    "Insecticides",
    "Granules",
    "Micro Nutrients",
    "Fertilizers",
  ];

  const facilities = ["EC", "SC", "WP", "GR", "WDG"];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 animate__animated animate__fadeIn">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 px-4 md:px-10 lg:px-16 mx-5 my-5 sm:mx-7 sm:my-7 md:mx-9 md:my-9 lg:mx-12 lg:my-12 bg-gradient-to-r from-green-50 via-white to-green-50 rounded-2xl md:rounded-3xl shadow-md overflow-hidden animate__animated animate__fadeInDown">
          <div className="absolute -top-10 -left-10 w-32 h-32 md:w-40 md:h-40 bg-green-100 rounded-full opacity-30 blur-2xl z-0"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-green-200 rounded-full opacity-20 blur-2xl z-0"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between z-10">
            {/* Left: Logo */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/3 mb-6 md:mb-0">
              <img
                src={agrolixGroupLogo}
                alt="Agrolix Group Logo"
                className="w-32 h-32 md:w-48 md:h-48 object-contain"
              />
            </div>
            {/* Right: Content */}
            <div className="flex flex-col justify-center items-start w-full md:w-2/3">
              <h1 className="text-2xl xs:text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] drop-shadow-lg leading-tight mb-3 md:mb-5 text-left">
                Agrolix Group
              </h1>
              <p className="text-base xs:text-lg md:text-2xl text-[#7a9955] font-semibold mb-2 tracking-wide text-left max-w-xl">
                Empowering Pakistan's farming community since 2000 with quality agrochemical solutions
              </p>
              <span className="block w-16 md:w-32 h-1 bg-gradient-to-r from-[#a4c67a] via-[#6f8b4c] to-[#a4c67a] rounded-full mb-2"></span>
              <span className="text-[#7a9955] text-xs md:text-sm italic text-left">
                Est. 2000 &nbsp;•&nbsp; Bahawalpur, Pakistan
              </span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 md:py-16 px-4 md:px-6 animate__animated animate__fadeInLeft">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  About Our Journey
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Since our establishment in 2000, Agrolix Group has been at the
                  forefront of Pakistan's agrochemical industry. Based in
                  Bahawalpur, we have built our reputation on the foundational
                  principles of <strong>Quality and Commitment</strong> -
                  pillars that continue to guide us today.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe farmers are the backbone of our economy, possessing
                  the power to nourish our nation. This belief drives our
                  unwavering dedication to providing the farming community with
                  the best agrochemical solutions available.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we operate state-of-the-art production facilities and
                  maintain an extensive network of trusted partners, all united
                  in our mission to ensure food security and agricultural
                  prosperity.
                </p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-0">
                <video
                  src={agrolixVideo}
                  controls
                  autoPlay
                  loop
                  muted
                  className="rounded-2xl shadow-xl w-full max-w-sm md:max-w-lg object-cover"
                  poster={aboutImg}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-10 md:py-16 px-4 md:px-6 bg-white animate__animated animate__fadeInRight">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <FaEye className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-3xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Agrolix Group envisions a future where sustainable
                  agricultural practices and innovative agrochemical solutions
                  empower farmers to achieve maximum productivity, ensuring food
                  security and prosperity for communities worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 md:p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <FaBullseye className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our mission is to lead the agrochemical industry through
                  cutting-edge research, superior-quality products, and
                  unwavering commitment to environmental stewardship. We aim to
                  provide farmers with the best tools and knowledge to enhance
                  crop health and yield, fostering a more sustainable and
                  thriving agricultural ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Group Companies Section */}
        <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-br from-green-100 to-blue-50 animate__animated animate__zoomIn">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-6 md:mb-8">
              Our Group Companies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {companies.map((company, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex flex-col items-center transition-shadow duration-300 cursor-pointer group w-full hover:bg-[#f1ffdf] hover:border-[#daf8b6] border border-transparent"
                  whileHover={{
                    scale: 1.08,
                    rotate: 4,
                    boxShadow: "0 8px 32px 0 #a4c67a",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-3 md:mb-4 flex justify-center items-center">
                    <img
                      src={company.logo}
                      alt={company.name + " logo"}
                      className="w-16 h-16 object-contain rounded-full bg-white border border-green-200 shadow group-hover:bg-green-100 transition-colors duration-300"
                    />
                  </div>
                  <span className="text-[#7a9955] font-semibold text-base md:text-lg text-center group-hover:text-[#7a9955] transition-colors duration-300">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Products & Facilities */}
        <section className="py-10 md:py-16 px-4 md:px-6 animate__animated animate__fadeInUp">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
              Our Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                  Product Portfolio
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {products.map((product, index) => {
                    const getPath = (product) => {
                      const productLower = product.toLowerCase();
                      if (productLower === "micro nutrients") {
                        return "/products/micro-nutrients";
                      }
                      return `/products/${productLower}`;
                    };
                    
                    return (
                      <Link
                        key={index}
                        to={getPath(product)}
                        className="bg-[#f7d9ff] text-[#611b74] p-2 md:p-4 rounded-lg text-center transition-colors duration-300"
                      >
                        <span className="font-medium text-[#611b74] text-sm md:text-base">
                          {product}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                  Production Facilities
                </h3>
                <p className="text-gray-600 mb-2 md:mb-4">
                  State-of-the-art manufacturing capabilities:
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="bg-[#f7d9ff] text-[#611b74] px-2 md:px-4 py-1 md:py-2 rounded-full font-medium text-xs md:text-base"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-r from-gray-50 to-gray-100 animate__animated animate__fadeIn">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-center text-gray-600 mb-8 md:mb-12 text-base md:text-lg">
              The principles that guide everything we do
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreValues.map((value, index) => {
                const IconComponent = value.icon;
                // Magnetic Pull effect
                const cardRef = useRef(null);
                const x = useMotionValue(0);
                const y = useMotionValue(0);
                const springX = useSpring(x, { stiffness: 300, damping: 30 });
                const springY = useSpring(y, { stiffness: 300, damping: 30 });

                function handleMouseMove(e) {
                  const card = cardRef.current;
                  if (!card) return;
                  const rect = card.getBoundingClientRect();
                  const cardX = rect.left + rect.width / 2;
                  const cardY = rect.top + rect.height / 2;
                  const mouseX = e.clientX;
                  const mouseY = e.clientY;
                  const deltaX = (mouseX - cardX) / 10;
                  const deltaY = (mouseY - cardY) / 10;
                  x.set(deltaX);
                  y.set(deltaY);
                }
                function handleMouseLeave() {
                  x.set(0);
                  y.set(0);
                }
                return (
                  <motion.div
                    key={index}
                    ref={cardRef}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full hover:bg-[#f6e4ff] hover:border-[#611b74] border border-transparent group"
                    style={{ x: springX, y: springY }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center mb-4 md:mb-6">
                      <div className="bg-[#f8dfff] p-2 md:p-3 rounded-full mr-2 md:mr-4 group-hover:bg-[#611b74] transition-colors duration-300">
                        <IconComponent className="w-7 md:w-8 h-7 md:h-8 text-[#611b74] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold text-gray-800 group-hover:text-[#611b74] transition-colors duration-300">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-[#611b74] transition-colors duration-300">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CEO & Managing Director Message Sections */}
        <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-br from-green-100 to-blue-100 animate__animated animate__fadeInUpBig">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* CEO Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center hover:shadow-green-300 transition-shadow duration-300 w-full">
              <div className="w-28 md:w-32 h-28 md:h-32 mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img
                  src={ceoImg}
                  alt="CEO Nasir Shakeel Kahlon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 tracking-wide">
                Message of CEO
              </h2>
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2 md:mb-4">
                NASIR SHAKEEL KAHLOON
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify mb-1 md:mb-2">
                With over{" "}
                <span className="font-bold text-green-700">32 years</span> of
                experience in the agrochemical industry, my journey began in
                1992 and has been driven by a deep commitment to the farming
                community. After seven years in the field, this passion led me
                to establish Agrolix Chemicals Industry in 2000. Since then, I
                have remained dedicated to providing innovative, reliable, and
                effective solutions for our farmers. I continue to uphold my
                promise of quality and service, ensuring that our products meet
                the highest standards and contribute to the growth and
                prosperity of our agricultural sector.
              </p>
            </div>
            {/* Managing Director Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center hover:shadow-green-300 transition-shadow duration-300 w-full">
              <div className="w-28 md:w-32 h-28 md:h-32 mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img
                  src={haseebImg}
                  alt="Managing Director Haseeb Nasir Kahlon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 tracking-wide">
                Message of Managing Director
              </h2>
              <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-2 md:mb-4">
                HASEEB NASIR KAHLOON
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify mb-1 md:mb-2">
                I’m thrilled to connect with you as we embark on a journey to
                revolutionize pest management and elevate agriculture. As a
                young and dynamic leader in this field, my mission is to blend
                innovation with commitment to delivering the highest quality
                solutions for pest control.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify mb-1 md:mb-2">
                We believe in the power of collaboration and innovation. Every
                day, we strive to push boundaries and set new standards in the
                industry. Our goal is to ensure that you not only meet your
                agricultural goals but exceed them with confidence.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
                Together, we’ll cultivate success and foster a thriving
                agricultural community. Here’s to a future where your fields
                flourish and your efforts yield remarkable results.
              </p>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-r from-green-600 to-[#611b74]  text-white animate__animated animate__fadeIn">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Thank You for Your Trust
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              We are looking forward to working with you and helping you achieve
              your goals by providing you with the latest and sustainable
              agriculture practices along with a technological perspective.
            </p>
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
              <p className="text-lg italic">
                "Together, we cultivate success and ensure a prosperous future
                for Pakistan's agricultural community."
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
