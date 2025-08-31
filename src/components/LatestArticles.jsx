
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';
import pestControlImg from '../assets/homepage/articles/article1.webp';
import wheatSeedsImg from '../assets/homepage/articles/article2.webp';
import organicFertilizerImg from '../assets/homepage/articles/article3.jpg';

const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Best Pest Control Solutions for Cotton Crops in Pakistan",
      excerpt: "Learn about effective pest management strategies for cotton farming with Agrolix Group's proven solutions and expert recommendations.",
      author: "Dr. Ahmed Hassan",
      date: "Aug 28, 2025",
      readTime: "5 min",
      category: "Pest Control",
      image: pestControlImg
    },
    {
      id: 2,
      title: "High-Yield Wheat Seeds for Maximum Productivity",
      excerpt: "Discover our premium wheat varieties designed for Pakistani climate conditions with superior yield potential.",
      author: "Muhammad Ali",
      date: "Aug 25, 2025",
      readTime: "4 min",
      category: "Seeds",
      image: wheatSeedsImg
    },
    {
      id: 3,
      title: "Organic Fertilizers: The Future of Sustainable Farming",
      excerpt: "Explore how organic fertilizers can improve soil health while maintaining high crop yields and environmental sustainability.",
      author: "Fatima Khan",
      date: "Aug 22, 2025",
      readTime: "6 min",
      category: "Fertilizers",
      image: organicFertilizerImg
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Latest Updates
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert insights and analysis on the latest agricultural trends, 
            best practices, and innovative solutions for Pakistani farmers.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-green-200"
            >
              {/* Article Image */}
              <div className="h-40 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <FaClock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Link
                  to={`/articles/${article.id}`}
                  className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300 line-clamp-2 leading-snug hover:underline"
                >
                  {article.title}
                </Link>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{article.author}</p>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <FaCalendarAlt size={10} />
                        <span>{article.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    to={`/articles/${article.id}`}
                    className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center gap-1 group/btn"
                  >
                    Read
                    <FaArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;