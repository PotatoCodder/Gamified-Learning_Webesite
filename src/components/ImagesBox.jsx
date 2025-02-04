/* eslint-disable no-unused-vars */
import React from 'react';
import wordle from '../assets/wordle.jpg';
import speech from '../assets/speech.webp';
import { Link } from 'react-router-dom';
const ImageBoxes = () => {
  return (
    <section id="game" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-8 text-3xl font-semibold text-gray-900">Explore MyWordle Features</h2>

        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Link to="/wordle">
            <div className="relative group">
                <img
                src={wordle}  // Replace with actual image path
                alt="Feature 1"
                className="object-cover w-full h-56 transition-all duration-300 rounded-lg group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
                <span className="text-xl font-semibold text-white">Wordle</span>
                </div>
            </div>
          </Link>

          <div className="relative group">
            <img
              src={speech}  // Replace with actual image path
              alt="Feature 2"
              className="object-cover w-full h-56 transition-all duration-300 rounded-lg group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
              <span className="text-xl font-semibold text-white">Feature 2</span>
            </div>
          </div>

          <div className="relative group">
            <img
              src="path_to_image_3.jpg"  // Replace with actual image path
              alt="Feature 3"
              className="object-cover w-full h-56 transition-all duration-300 rounded-lg group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
              <span className="text-xl font-semibold text-white">Feature 3</span>
            </div>
          </div>

          <div className="relative group">
            <img
              src="path_to_image_4.jpg"  // Replace with actual image path
              alt="Feature 4"
              className="object-cover w-full h-56 transition-all duration-300 rounded-lg group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100">
              <span className="text-xl font-semibold text-white">Feature 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBoxes;
