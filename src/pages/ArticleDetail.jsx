
import React from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaShare,
  FaBookmark,
  FaArrowLeft,
  FaArrowRight,
  FaTag,
  FaEye,
} from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import article1Banner from '../assets/homepage/articles/article1-1.jpg';
import article1Image from '../assets/homepage/articles/article1-2.jpg';
import article2Banner from '../assets/homepage/articles/article2-1.jpg';
import article2Image from '../assets/homepage/articles/article2-2.webp';
import article3Banner from '../assets/homepage/articles/article3-1.jpg';
import article3Image from '../assets/homepage/articles/article3-2.jpg';

const articles = [
  {
    id: 1,
    title: "Best Pest Control Solutions for Cotton Crops in Pakistan",
    content: `
      <p>Cotton farming in Pakistan faces numerous challenges, with pest management being one of the most critical aspects that determine crop success. Pakistani cotton farmers deal with various pests including whiteflies, bollworms, aphids, and thrips that can significantly reduce yield and quality if not properly managed.</p>

      <h3>Understanding Common Cotton Pests</h3>
      <p>The most destructive pests in Pakistani cotton fields include the American bollworm (Helicoverpa armigera), pink bollworm (Pectinophora gossypiella), and whitefly (Bemisia tabaci). These pests can cause yield losses ranging from 20% to 60% if left uncontrolled.</p>

      <h3>Integrated Pest Management (IPM) Approach</h3>
      <p>Agrolix Group recommends an integrated approach that combines biological, cultural, and chemical control methods. This strategy not only provides effective pest control but also ensures environmental sustainability and cost-effectiveness for farmers.</p>

      <h3>Recommended Control Strategies</h3>
      <p>Early detection is crucial for effective pest management. Regular field monitoring, proper crop rotation, and timely application of appropriate pesticides form the foundation of successful pest control in cotton cultivation.</p>

      <h3>Chemical Control Solutions</h3>
      <p>When chemical intervention becomes necessary, Agrolix Group offers a comprehensive range of selective insecticides that target specific pests while preserving beneficial insects. Our products include both systemic and contact insecticides formulated specifically for Pakistani climate conditions.</p>

      <h3>Best Application Practices</h3>
      <p>Proper timing, correct dosage, and appropriate application methods are essential for maximizing the effectiveness of pest control measures. Always follow label instructions and consider weather conditions when applying pesticides.</p>

      <h3>Sustainable Pest Management</h3>
      <p>The future of cotton pest management lies in sustainable practices that protect crops while maintaining ecological balance. Agrolix Group is committed to developing eco-friendly solutions that support long-term agricultural productivity.</p>
    `,
    author: "Dr. Ahmed Hassan",
    authorBio:
      "Agricultural Entomologist with 15+ years experience in crop protection and pest management across Pakistan.",
    date: "August 28, 2025",
    readTime: "5 min read",
    views: "1,247",
    category: "Pest Control",
    tags: [
      "Cotton",
      "Pest Control",
      "IPM",
      "Sustainable Agriculture",
      "Crop Protection",
    ],
  banner: article1Banner,
  image: article1Image,
  },
  {
    id: 2,
    title: "High-Yield Wheat Seeds for Maximum Productivity",
    content: `
      <p>Wheat is a staple food crop in Pakistan, and choosing the right seed variety is essential for achieving high yields. Agrolix Group offers premium wheat seeds tailored for local conditions.</p>

      <h3>Understanding Wheat Varieties</h3>
      <p>There are several wheat varieties suitable for different regions of Pakistan. Selecting the right variety based on climate, soil, and disease resistance is crucial for maximizing yield and quality.</p>

      <h3>Seed Selection and Preparation</h3>
      <p>Always use certified, disease-free seeds for better germination and crop health. Treat seeds with recommended fungicides to prevent early diseases.</p>

      <h3>Best Practices for Wheat Cultivation</h3>
      <ul>
        <li><strong>Optimal Sowing Time:</strong> Plant seeds at the recommended time for your region to maximize yield.</li>
        <li><strong>Soil Preparation:</strong> Ensure proper tillage and soil fertility before sowing. Plough the field thoroughly and level it for uniform irrigation.</li>
        <li><strong>Balanced Fertilization:</strong> Apply nutrients based on soil tests to support healthy growth. Use a mix of organic and chemical fertilizers for best results.</li>
        <li><strong>Timely Irrigation:</strong> Provide water at critical growth stages, especially during tillering and grain filling. Avoid water stress during flowering and grain development.</li>
      </ul>

      <h3>Weed and Pest Management</h3>
      <p>Monitor fields regularly for weeds and pests. Use integrated weed management and apply herbicides only when necessary. Control aphids and other pests with recommended solutions.</p>

      <h3>Harvesting and Storage</h3>
      <p>Harvest wheat when grains are fully mature and dry. Store in clean, dry conditions to prevent post-harvest losses.</p>

      <p>By following these practices and using Agrolix Group’s high-yield seeds, farmers can achieve excellent productivity and profitability.</p>
    `,
    author: "Muhammad Ali",
    authorBio:
      "Seed Specialist with a focus on high-yield varieties and sustainable wheat production.",
    date: "August 25, 2025",
    readTime: "4 min read",
    views: "1,012",
    category: "Seeds",
    tags: ["Wheat", "Seeds", "High Yield", "Farming", "Productivity"],
  banner: article2Banner,
  image: article2Image,
  },
  {
    id: 3,
    title: "Organic Fertilizers: The Future of Sustainable Farming",
    content: `
      <p>Sustainable agriculture is gaining importance in Pakistan, and organic fertilizers play a vital role in maintaining soil health and productivity.</p>

      <h3>What Are Organic Fertilizers?</h3>
      <p>Organic fertilizers are derived from natural sources such as compost, manure, and plant residues. They improve soil structure, increase water retention, and provide essential nutrients to crops.</p>

      <h3>Benefits of Organic Fertilizers</h3>
      <ul>
        <li><strong>Improved Soil Structure:</strong> Organic matter enhances soil aeration and water retention, making soils more resilient to drought.</li>
        <li><strong>Enhanced Microbial Activity:</strong> Supports beneficial soil microbes for nutrient cycling and disease suppression.</li>
        <li><strong>Reduced Chemical Dependency:</strong> Minimizes the need for synthetic fertilizers and pesticides, leading to healthier crops and environment.</li>
        <li><strong>Environmental Protection:</strong> Reduces pollution, conserves biodiversity, and helps mitigate climate change.</li>
      </ul>

      <h3>Application Methods</h3>
      <p>Apply compost, manure, or green manure crops before planting. Use organic mulches to retain moisture and suppress weeds. Combine organic and mineral fertilizers for balanced nutrition.</p>

      <h3>Crop Rotation and Soil Health</h3>
      <p>Rotate crops to maintain soil fertility and break pest and disease cycles. Include legumes and cover crops in the rotation for added benefits.</p>

      <h3>Challenges and Solutions</h3>
      <p>Transitioning to organic fertilizers may require changes in management practices. Seek expert advice for best results and gradual adoption.</p>

      <p>Adopting organic fertilizers with Agrolix Group’s guidance ensures long-term farm sustainability and better crop yields.</p>
    `,
    author: "Fatima Khan",
    authorBio:
      "Soil Scientist and advocate for sustainable and organic farming practices in South Asia.",
    date: "August 22, 2025",
    readTime: "6 min read",
    views: "1,089",
    category: "Fertilizers",
    tags: [
      "Organic",
      "Fertilizers",
      "Sustainability",
      "Soil Health",
      "Eco-Friendly",
    ],
  banner: article3Banner,
  image: article3Image,
  },
];

function ArticleDetail() {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-green-600 hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    );
  }

  // Example share URLs (customize as needed)
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      window.location.href
    )}&text=${encodeURIComponent(article.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      article.title + " " + window.location.href
    )}`,
  };

  const handleShare = (platform) => {
    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
      <div>
        <Navbar />

        <div className="min-h-screen bg-gray-50">
          {/* Article Hero */}
          <motion.div
            className="relative text-white py-16"
            style={{ background: `url(${article.banner}) center/cover no-repeat` }}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                {/* Category & Reading Stats */}
                <motion.div
                  className="flex flex-wrap items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <FaTag size={12} />
                    {article.category}
                  </span>
                </motion.div>

                {/* Article Title */}
                <motion.h1
                  className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  {article.title}
                </motion.h1>

                {/* Author & Date Info */}
                <motion.div
                  className="flex flex-wrap items-center justify-between gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{article.author}</p>
                      <div className="flex items-center gap-2 text-green-100 text-sm">
                        <FaCalendarAlt size={12} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Share & Bookmark */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-3 rounded-full transition-all duration-300 ${
                        isBookmarked
                          ? "bg-yellow-400 text-green-600"
                          : "bg-white bg-opacity-20 text-white hover:bg-opacity-30"
                      }`}
                    >
                      <FaBookmark size={16} />
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-100">Share:</span>
                      <button
                        onClick={() => handleShare("facebook")}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                      >
                        <FaFacebook size={14} />
                      </button>
                      <button
                        onClick={() => handleShare("twitter")}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                      >
                        <FaTwitter size={14} />
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                      >
                        <FaLinkedin size={14} />
                      </button>
                      <button
                        onClick={() => handleShare("whatsapp")}
                        className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                      >
                        <FaWhatsapp size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <motion.div
                  className="lg:col-span-3"
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                >
                  {/* Article Image */}
                  <motion.div
                    className="h-64 md:h-80 rounded-2xl flex items-center justify-center mb-8 shadow-lg overflow-hidden bg-gray-100"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>

                  {/* Article Body */}
                  <motion.div
                    className="prose prose-lg max-w-none"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                  >
                    <div
                      className="text-gray-700 leading-relaxed space-y-6"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    className="mt-12 pt-8 border-t border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Tags:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(article.tags || []).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300 cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Author Bio */}
                  <motion.div
                    className="mt-12 p-6 bg-gray-100 rounded-2xl"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.7 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          About {article.author}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {article.authorBio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Sidebar */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <div className="sticky top-8 space-y-8">
                    {/* Other Articles */}
                    <motion.div
                      className="bg-white p-6 rounded-2xl shadow-md"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      <h4 className="font-bold text-gray-800 mb-4">Other Articles</h4>
                      <div className="space-y-4">
                        {articles.map((a) => (
                          <button
                            key={a.id}
                            onClick={() => navigate(`/articles/${a.id}`)}
                            className={`flex items-center gap-3 w-full text-left p-2 rounded-lg transition-all duration-200 hover:bg-green-50 ${a.id === article.id ? 'bg-green-100' : ''}`}
                          >
                            <img src={a.image} alt={a.title} className="w-12 h-12 object-cover rounded-lg border" />
                            <div>
                              <div className="font-semibold text-gray-800 line-clamp-2 text-sm">{a.title}</div>
                              <div className="text-xs text-gray-500">{a.category}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>

                    {/* Contact Us Box */}
                    <motion.div
                      className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 rounded-2xl text-white flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                    >
                      <h4 className="font-bold mb-2 text-lg">Need Help?</h4>
                      <p className="text-green-100 text-sm mb-4 text-center">Our team is ready to answer your questions and provide expert agricultural advice. Reach out to us for personalized support!</p>
                      <button
                        onClick={() => navigate('/contact')}
                        className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
                      >
                        Contact Us
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="bg-green-600 py-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Expert Agricultural Advice?
                </h3>
                <p className="text-green-100 text-lg mb-6">
                  Our agricultural experts are ready to help you implement these
                  solutions on your farm.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Our Experts
                  </button>
                  <button
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                    onClick={() => navigate('/products')}
                  >
                    Browse Products
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <style jsx>{`
            .prose h3 {
              color: #1f2937;
              font-size: 1.5rem;
              font-weight: 600;
              margin-top: 2rem;
              margin-bottom: 1rem;
            }

            .prose p {
              margin-bottom: 1.5rem;
              line-height: 1.7;
            }

            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}</style>
        </div>
        <Footer />
      </div>
  );
}

export default ArticleDetail;
