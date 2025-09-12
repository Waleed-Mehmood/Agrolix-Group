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
  <div className="py-16" style={{ background: 'linear-gradient(to bottom, #fff, #e6f2d7)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-green-800 bg-[#e6ffc7]">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#bddd97] rounded-full animate-pulse"></span>
            Have Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-[#9542ac] to-[#8827a3]"></div>
        </div>
        
        <div className="grid gap-4 sm:gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg transition-all duration-300 
                ${openIndex === idx 
                  ? '' 
                  : 'hover:shadow-xl hover:scale-[1.01] sm:hover:scale-[1.02]'
                } border`}
              style={{ background: 'linear-gradient(to right, #fff, #e6f2d7 30%)', borderColor: '#e6f2d7', boxShadow: openIndex === idx ? '0 0 0 2px #a4c67a, 0 4px 24px 0 #e6f2d7' : undefined }}
            >
              <button
                className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-2 sm:gap-4 ${
                  openIndex === idx ? '' : ''
                }`}
                style={openIndex === idx ? { background: '#f3f8ec' } : {}}
                onClick={() => toggleFAQ(idx)}
              >
                <span className={`flex-1 text-left font-semibold ${
                  openIndex === idx 
                    ? '' 
                    : 'text-gray-700'
                } transition-all duration-300`}
                  style={openIndex === idx ? { color: '#a4c67a', fontSize: '1.125rem' } : {}}
                >
                  <span className="mr-2 sm:mr-3 inline-block text-sm sm:text-base">
                    {openIndex === idx ? '🌿' : '🔍'}
                  </span>
                  {faq.question}
                </span>
                <span 
                  className={`flex-shrink-0 p-2 sm:p-3 rounded-full transition-all duration-300 ${
                    openIndex === idx 
                      ? '' 
                      : ''
                  }`}
                  style={openIndex === idx 
                    ? { background: 'linear-gradient(135deg, #a4c67a, #a4c67a 80%)', color: 'white', boxShadow: '0 2px 8px 0 #e6f2d7', transform: 'scale(1.1)' } 
                    : { background: '#e6f2d7', color: '#a4c67a' }}
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
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-3 sm:pt-4 border-t" style={{ borderColor: '#e6f2d7' }}>
                  <p className="text-gray-600 bg-white/50 p-3 sm:p-4 rounded-lg sm:rounded-xl leading-relaxed text-sm sm:text-base">
                    <span className="font-medium hidden sm:inline" style={{ color: '#a4c67a' }}>→</span> 
                    <span className="font-medium sm:hidden" style={{ color: '#a4c67a' }}>•</span> {faq.answer}
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
