/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 

const questions = [
  "What is the capital of France?",
  "Who wrote 'To Kill a Mockingbird'?",
  "What is the square root of 64?",
  "Which planet is known as the Red Planet?",
  "What is the chemical symbol for gold?",
  "Who painted the Mona Lisa?",
  "What is the longest river in the world?",
  "In which year did the Titanic sink?",
  "Who developed the theory of relativity?",
  "Which gas do plants absorb from the atmosphere?",
  "What is the hardest natural substance on Earth?",
  "How many continents are there on Earth?",
  "Which is the smallest country in the world?",
  "What is the boiling point of water in Celsius?",
  "What is the capital city of Japan?",
  "Who discovered penicillin?",
  "What is the currency of the United Kingdom?",
  "What is the main ingredient in guacamole?",
  "Which element has the atomic number 1?",
  "What is the capital of Australia?",
  "Which ocean is the largest?",
  "What is the tallest mountain in the world?",
  "Who was the first person to step on the moon?",
  "Which organ pumps blood in the human body?",
  "What is the chemical symbol for oxygen?",
  "Which country is known as the Land of the Rising Sun?",
  "How many players are in a football (soccer) team?",
  "What is the capital of Canada?",
  "What is the main language spoken in Brazil?",
  "What is the process of converting water into vapor called?",
  "Which animal is known as the King of the Jungle?",
  "What is the speed of light in vacuum?",
  "Who wrote 'Romeo and Juliet'?",
  "What is the national flower of the USA?",
  "What is the capital of Italy?",
  "Which instrument has 88 keys?",
  "What is the main gas found in the Earth's atmosphere?",
  "What is the capital of China?",
  "Who discovered gravity?",
  "Which color is formed by mixing red and blue?"
];

const options = [
  ["Paris", "London", "Berlin", "Madrid"],
  ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
  ["6", "8", "10", "12"],
  ["Mars", "Jupiter", "Venus", "Saturn"],
  ["Au", "Ag", "Pb", "Fe"],
  ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
  ["Amazon", "Nile", "Yangtze", "Mississippi"],
  ["1912", "1905", "1898", "1923"],
  ["Einstein", "Newton", "Galileo", "Tesla"],
  ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  ["Diamond", "Gold", "Iron", "Quartz"],
  ["7", "6", "5", "8"],
  ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
  ["100", "90", "110", "120"],
  ["Tokyo", "Osaka", "Seoul", "Beijing"],
  ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
  ["Pound Sterling", "Euro", "Dollar", "Yen"],
  ["Avocado", "Tomato", "Onion", "Pepper"],
  ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
  ["Canberra", "Sydney", "Melbourne", "Brisbane"],
  ["Pacific", "Atlantic", "Indian", "Arctic"],
  ["Everest", "K2", "Kilimanjaro", "Denali"],
  ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
  ["Heart", "Lungs", "Liver", "Kidneys"],
  ["O", "H", "C", "N"],
  ["Japan", "China", "India", "South Korea"],
  ["11", "10", "9", "12"],
  ["Ottawa", "Toronto", "Montreal", "Vancouver"],
  ["Portuguese", "Spanish", "French", "Italian"],
  ["Evaporation", "Condensation", "Precipitation", "Sublimation"],
  ["Lion", "Tiger", "Elephant", "Cheetah"],
  ["299,792 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
  ["Shakespeare", "Hemingway", "Dickens", "Austen"],
  ["Rose", "Lily", "Tulip", "Sunflower"],
  ["Rome", "Milan", "Venice", "Florence"],
  ["Piano", "Guitar", "Violin", "Flute"],
  ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
  ["Beijing", "Shanghai", "Hong Kong", "Shenzhen"],
  ["Newton", "Galileo", "Copernicus", "Kepler"],
  ["Purple", "Orange", "Green", "Brown"]
];


const correctAnswers = options.map(opt => opt[0]);

const QuizForm = () => {
  const [answers, setAnswers] = useState(Array(40).fill(""));
  const [score, setScore] = useState(null);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = answers.reduce((acc, answer, index) => acc + (answer === correctAnswers[index] ? 1 : 0), 0);
    setScore(newScore);
    localStorage.setItem('quiz', newScore); // Store newScore instead of score
  };
  
 



  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg relative">
      <AnimatePresence>
        {score !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-green-100 border border-green-500 shadow-lg rounded-lg p-6 z-50 text-center
                      flex flex-col items-center justify-center w-[300px] h-[180px]"
          >
            <p className="text-2xl font-bold mb-3">Score: {score}</p>
            <a href="/" className="text-blue-600 font-semibold hover:underline">
              Go to Home
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <h2 className="text-center text-2xl font-bold mb-4">Quiz Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="border-b pb-4">
            <p className="font-medium">{question}</p>
            {options[index].map((option) => (
              <label key={option} className="block cursor-pointer">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default QuizForm;
