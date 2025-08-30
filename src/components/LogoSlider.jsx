import React, { useState, useEffect, useRef } from 'react';

const LogoSlider = () => {
  // Local logo images
  const logos = [
    { id: 1, name: 'Ali Akbar', url: require('../assets/homepage/logo-images/ali-akbar.png') },
    { id: 2, name: 'Bakhtawar', url: require('../assets/homepage/logo-images/bakhtawar.png') },
    { id: 3, name: 'Greenlet', url: require('../assets/homepage/logo-images/greenlet.png') },
    { id: 4, name: 'Hisun', url: require('../assets/homepage/logo-images/hisun.png') },
    { id: 5, name: 'Kundan Naseem Hospital', url: require('../assets/homepage/logo-images/kundan-naseem-hospital.png') },
    { id: 6, name: 'Nova', url: require('../assets/homepage/logo-images/nova.png') },
    { id: 7, name: 'Suncrop Wanda', url: require('../assets/homepage/logo-images/suncrop-wanda.png') },
    { id: 8, name: 'Sungro', url: require('../assets/homepage/logo-images/sungro.png') },
    { id: 9, name: 'Tahafuz Sungro', url: require('../assets/homepage/logo-images/tahafuz-sungro.png') },
    { id: 10, name: 'Tahafuz', url: require('../assets/homepage/logo-images/tahafuz.png') },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Responsive items per view
  const [itemsPerView, setItemsPerView] = useState(4);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const maxIndex = Math.max(0, logos.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isDragging, maxIndex]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - dragStart;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset < 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
      } else if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Touch drag handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - dragStart;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // Navigation functions
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const translateX = (-currentIndex * (100 / itemsPerView)) + (dragOffset / (sliderRef.current?.offsetWidth || 1000) * 100);

  return (
  <div className="w-full max-w-7xl mx-auto my-12 py-10 px-2 sm:px-6">
  <div className="text-center mb-10 px-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-700 via-green-600 to-green-500 bg-clip-text text-transparent mb-2 sm:mb-3">
          Suncrop Group – Quality You Can Trust
        </h2>
        <p className="text-slate-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-snug sm:leading-normal mt-1 sm:mt-2">Pakistan ki leading agro-chemical company, serving farmers nationwide</p>
      </div>

  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100">
        {/* Main slider container */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              className={`flex-shrink-0 px-2 sm:px-6 py-3 sm:py-4 flex items-center justify-center transition-all duration-300 ${
                isDragging ? 'scale-95' : 'hover:scale-105'
              }`}
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 sm:p-4 shadow-md hover:shadow-xl transition-all duration-300 w-full h-24 sm:h-28 flex items-center justify-center group border border-green-200">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-[90px] sm:max-w-[110px] max-h-[60px] sm:max-h-[70px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
            currentIndex === 0
              ? 'bg-green-100 text-green-300 cursor-not-allowed'
              : 'bg-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-300 text-green-700 hover:text-white shadow-xl hover:scale-110'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
            currentIndex === maxIndex
              ? 'bg-green-100 text-green-300 cursor-not-allowed'
              : 'bg-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-green-700 hover:text-white shadow-xl hover:scale-110'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots indicator */}
  <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-gradient-to-r from-green-500 to-green-400 scale-125'
                : 'bg-green-100 hover:bg-green-200'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause control */}
  <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
              <span className="text-sm font-medium">Pause</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span className="text-sm font-medium">Play</span>
            </>
          )}
        </button>
      </div>

      {/* Progress bar */}
      {isAutoPlaying && (
        <div className="mt-6 w-full bg-green-100 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full transition-all duration-300"
            style={{ 
              animation: 'progress 3s linear infinite',
              animationPlayState: isDragging ? 'paused' : 'running'
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;