import React, { useState } from 'react';

const faqs = [
  {
    question: 'What does Agrolix Group do?',
    answer: 'Agrolix Group specializes in agricultural products, providing high-quality seeds, fertilizers, and crop solutions.'
  },
  {
    question: 'How can I contact Agrolix Group?',
    answer: 'You can reach us via the Contact page on our website or email us at info@agrolixgroup.com.'
  },
  {
    question: 'Where are your products available?',
    answer: 'Our products are available across various regions. Please check our Products page for more details.'
  },
  {
    question: 'Do you offer support for farmers?',
    answer: 'Yes, we provide guidance and support for farmers through our expert team and resources.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
            Have Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group bg-gradient-to-r from-white to-green-50/30 rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg transition-all duration-300 
                ${openIndex === idx 
                  ? 'ring-2 ring-green-500 shadow-green-200/50' 
                  : 'hover:shadow-xl hover:shadow-green-100/50 hover:scale-[1.01] sm:hover:scale-[1.02]'
                } border border-green-100`}
            >
              <button
                className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-2 sm:gap-4 ${
                  openIndex === idx ? 'bg-green-50/50' : ''
                }`}
                onClick={() => toggleFAQ(idx)}
              >
                <span className={`flex-1 text-left font-semibold ${
                  openIndex === idx 
                    ? 'text-green-700 text-base sm:text-lg' 
                    : 'text-gray-700 group-hover:text-green-600'
                } transition-all duration-300`}>
                  <span className="mr-2 sm:mr-3 inline-block text-sm sm:text-base">
                    {openIndex === idx ? '🌿' : '🔍'}
                  </span>
                  {faq.question}
                </span>
                <span 
                  className={`flex-shrink-0 p-2 sm:p-3 rounded-full transition-all duration-300 ${
                    openIndex === idx 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md sm:shadow-lg shadow-green-200/50 scale-105 sm:scale-110' 
                      : 'bg-green-100 text-green-600 group-hover:bg-green-200'
                  }`}
                >
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3 sm:pt-4 border-t border-green-100">
                  <p className="text-gray-600 bg-white/50 p-3 sm:p-4 rounded-lg sm:rounded-xl leading-relaxed text-sm sm:text-base">
                    <span className="text-green-700 font-medium hidden sm:inline">→</span> 
                    <span className="text-green-700 font-medium sm:hidden">•</span> {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
