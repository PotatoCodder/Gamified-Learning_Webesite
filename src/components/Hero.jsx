import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-20 text-white bg-gradient-to-r from-blue-600 to-purple-600 md:py-32">
      <div className="container px-6 mx-auto text-center">
        <h1 className="mb-4 text-5xl font-extrabold md:text-6xl animate-fade-in-down">
          Welcome to MyWordle
        </h1>
        <p className="mb-8 text-xl md:text-2xl animate-fade-in-up">
          Challenge your vocabulary and have fun guessing words!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#game"
            className="px-8 py-3 text-lg font-semibold text-black transition duration-300 ease-in-out transform bg-yellow-500 rounded-full hover:bg-yellow-400 hover:scale-105"
          >
            Play Now
          </a>
          <a
            href="#how-to-play"
            className="px-8 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600 hover:scale-105"
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
