import React from 'react';
import wordle from '../assets/wordle.jpg';
import speech from '../assets/speech.webp';
import { Link } from 'react-router-dom';
const ImageBoxes = () => {
  return (
    <section id="game" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Explore MyWordle Features</h2>

        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link to="/wordle">
            <div className="relative group">
                <img
                src={wordle}  // Replace with actual image path
                alt="Feature 1"
                className="w-full h-56 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xl font-semibold">Wordle</span>
                </div>
            </div>
          </Link>

          <div className="relative group">
            <img
              src={speech}  // Replace with actual image path
              alt="Feature 2"
              className="w-full h-56 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <span className="text-white text-xl font-semibold">Feature 2</span>
            </div>
          </div>

          <div className="relative group">
            <img
              src="path_to_image_3.jpg"  // Replace with actual image path
              alt="Feature 3"
              className="w-full h-56 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <span className="text-white text-xl font-semibold">Feature 3</span>
            </div>
          </div>

          <div className="relative group">
            <img
              src="path_to_image_4.jpg"  // Replace with actual image path
              alt="Feature 4"
              className="w-full h-56 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <span className="text-white text-xl font-semibold">Feature 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBoxes;
