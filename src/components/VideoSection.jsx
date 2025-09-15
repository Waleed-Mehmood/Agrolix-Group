import React from "react";
import "../index.css";

// You can replace this with your own video file path
import sampleVideo from "../assets/agrolix-video.mp4";

export default function VideoSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-0" style={{ backgroundColor: '#f7fafc' }}>
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        <div className="aspect-w-16 aspect-h-9">
          <video
            className="w-full h-full object-cover"
            src={sampleVideo}
            autoPlay
            loop
            muted
            controls
            poster="/assets/earth.png"
          />
        </div>
      </div>
      <h2 className="mt-8 text-2xl sm:text-3xl font-bold text-green-800 drop-shadow-lg text-center">
        Our Vision in Motion
      </h2>
      <p className="mt-4 text-base sm:text-lg text-gray-700 text-center max-w-xl">
        Experience our journey and commitment to innovation, quality, and growth in agriculture. Watch our story unfold!
      </p>
    </section>
  );
}
