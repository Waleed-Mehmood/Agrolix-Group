import React from "react";

const features = [
  {
    title: "High Quality Products",
    description: "We provide top-notch agricultural products to ensure the best yield for your crops.",
    icon: (
      <svg className="w-12 h-12 text-green-600 transform transition-transform group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    bgColor: "from-green-50 to-green-100",
    iconBg: "bg-green-100",
    hoverBorder: "hover:border-green-400",
  },
  {
    title: "Expert Support",
    description: "Our team of experts is always available to guide you with the best farming practices.",
    icon: (
      <svg className="w-12 h-12 text-blue-600 transform transition-transform group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
    ),
    bgColor: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-100",
    hoverBorder: "hover:border-blue-400",
  },
  {
    title: "Innovative Solutions",
    description: "We use the latest technology to bring innovative solutions to the agricultural sector.",
    icon: (
      <svg className="w-12 h-12 text-yellow-500 transform transition-transform group-hover:scale-110 group-hover:rotate-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    bgColor: "from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-100",
    hoverBorder: "hover:border-yellow-400",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
            Features & Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary">
            Our Features
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-4">
            Discover why farmers trust us for their agricultural needs
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden border-2 border-transparent ${feature.hoverBorder} rounded-xl p-4 sm:p-6 lg:p-8 
                transition-all duration-300 ease-in-out hover:-translate-y-2 bg-gradient-to-br ${feature.bgColor}`}
            >
              <div className={`absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 -mr-8 sm:-mr-10 -mt-8 sm:-mt-10 rounded-full opacity-20 ${feature.iconBg}`}></div>
              <div className={`mb-4 sm:mb-6 p-2 sm:p-3 rounded-full w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center ${feature.iconBg}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-gray-800 group-hover:text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 line-height-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
