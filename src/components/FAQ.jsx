import React, { useState } from 'react';

const faqs = [
  {
    question: 'What does Suncrop Group do?',
    answer: 'Suncrop Group specializes in agricultural products, providing high-quality seeds, fertilizers, and crop solutions.'
  },
  {
    question: 'How can I contact Suncrop Group?',
    answer: 'You can reach us via the Contact page on our website or email us at info@suncropgroup.com.'
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
  <div className="max-w-6xl mx-4 xl:mx-auto my-8 sm:my-10 px-3 sm:px-6 py-6 bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-2xl shadow-xl border border-green-200">
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <div className="bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <h2 className="text-lg sm:text-2xl font-bold tracking-wide text-center">Frequently Asked Questions</h2>
        </div>
      </div>
  <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="rounded-xl border border-green-200 bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button
              className={`w-full px-3 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center font-semibold text-base sm:text-lg focus:outline-none transition-colors duration-300 ${openIndex === idx ? 'bg-green-50 text-green-700' : 'bg-white text-green-900 hover:bg-green-100'}`}
              onClick={() => toggleFAQ(idx)}
            >
              <span className="flex items-center gap-1 sm:gap-2">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                {faq.question}
              </span>
              <span className={`ml-2 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-emerald-600' : 'text-green-600'}`}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </button>
            <div
              className={`px-3 sm:px-6 pb-3 sm:pb-4 text-gray-700 text-sm sm:text-base transition-all duration-300 ${openIndex === idx ? 'block animate__animated animate__fadeIn' : 'hidden'}`}
              style={{ background: 'linear-gradient(90deg, #e6fffa 0%, #f0fff4 100%)' }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
