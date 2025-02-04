import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import wordle from "../assets/wordle.jpg";
import speech from "../assets/speech.webp";
import memoryGame from "../assets/memory-game.png";
import vocabQuiz from "../assets/vocab-quiz.jpg";
import nextPassage from "../assets/next-passage.avif";
import NextPassage from "./NextPassage";
const features = [
  { img: wordle, text: "Wordle", link: "/wordle" },
  { img: speech, text: "Speech Feature", link: "/speech-recognition" },
  { img: vocabQuiz, text: "Vocabulary Quiz", link: "/vocab-quiz" },
  { img: memoryGame, text: "Memory Game", link: "/memory-game" },
  { img: nextPassage, text: "Next Passage", link: "/next-passage" },
  { img: "path_to_image_6.jpg", text: "Feature 6", link: "/feature6" },
];

const ImageBoxes = () => {
  return (
    <section className="h-auto flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white py-8">
      <div className="max-w-6xl w-full px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 tracking-wide text-gray-100">
          Explore MyWordle Features
        </h2>

        {/* 3x2 Grid Layout with responsive design */}
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link} className="group relative block">
              <img
                src={feature.img}
                alt={feature.text}
                className="object-cover w-full h-48 sm:h-52 md:h-60 lg:h-72 rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xl font-semibold">{feature.text}</span>
                <FaArrowRight className="mt-2 text-2xl" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageBoxes;
