import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4ade8020_2%,transparent_25%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-96 bg-[radial-gradient(circle_at_bottom_left,_#4ade8015_2%,transparent_25%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's Start a Conversation
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-green-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-6">
              Whether you have a question about our products, services, or just want to say hello, we're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
            {/* Contact Info Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-green-600 px-6 sm:px-8 py-8 sm:py-12 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
                  <p className="text-green-100 mb-6 sm:mb-8 text-sm sm:text-base">
                    We're here to help and answer any question you might have.
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-green-100">Our Location</p>
                        <p className="font-medium text-sm sm:text-base">123 Agriculture Street, Farmland</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-green-100">Email Us</p>
                        <p className="font-medium text-sm sm:text-base break-all">contact@agrolixgroup.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-green-100">Call Us</p>
                        <p className="font-medium text-sm sm:text-base">+1 (234) 567-8900</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-green-500">
                    <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Business Hours</h4>
                    <div className="space-y-1 sm:space-y-2 text-green-100 text-sm sm:text-base">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="sm:col-span-1">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 resize-none"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium text-base sm:text-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
