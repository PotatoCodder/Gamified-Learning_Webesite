import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          Welcome to MyWordle
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          Challenge your vocabulary and have fun guessing words!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#game"
            className="bg-yellow-500 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Play Now
          </a>
          <a
            href="#how-to-play"
            className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            How to Play
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white opacity-20"></div>
    </section>
  );
};

export default Hero;
