import React, { useState } from "react";

// Import all images from assets/gallery
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery13 from "../assets/gallery/gallery13.jpg";

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
  gallery8, gallery9, gallery10, gallery11, gallery12, gallery13
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Show only first 6 images unless showAll is true
  const visibleImages = showAll ? images : images.slice(0, 6);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#e6ffc7] text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#a4c67a] rounded-full animate-pulse"></span>
            Our Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary">
            Moments Captured
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-4">
            Explore our journey and achievements through these memorable photos
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
        {/* See More button */}
        {!showAll && images.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 bg-[#611b74] text-white rounded-full font-semibold shadow hover:bg-[#8932a1] transition-colors"
              onClick={() => setShowAll(true)}
            >
              See More
            </button>
          </div>
        )}
        {/* Modal for image view */}
        {selectedImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-all"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative max-w-3xl w-full px-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 focus:outline-none"
                onClick={() => setSelectedImg(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedImg}
                alt="Gallery View"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
