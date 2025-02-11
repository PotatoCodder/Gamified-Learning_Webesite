/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import cold1 from "../assets/cold1.png";
import cold2 from "../assets/cold2.jpg";
import cold3 from "../assets/cold3.jpg";

import warm1 from "../assets/warm1.jpg";
import warm2 from "../assets/warm2.jpg";
import warm3 from "../assets/warm3.jpg";

import thin1 from "../assets/thin1.jpg";
import thin2 from "../assets/thin2.jpg";
import thin3 from "../assets/thin3.jpg";

import winter1 from "../assets/winter1.jpg";
import winter2 from "../assets/winter2.jpg";
import winter3 from "../assets/winter3.jpg";

import cause1 from "../assets/cause1.jpg";
import cause2 from "../assets/cause2.jpg";
import cause3 from "../assets/cause3.png";

import kid1 from "../assets/kid1.jpg";
import kid2 from "../assets/kid2.jpg";
import kid3 from "../assets/kid3.jpg";

import bugs1 from "../assets/bugs1.jpg";
import bugs2 from "../assets/bugs2.jpg";
import bugs3 from "../assets/bugs3.jpg";

import vacation1 from "../assets/vacation1.jpg";
import vacation2 from "../assets/vacation2.jpg";
import vacation3 from "../assets/vacation3.jpg";

import ev1 from "../assets/ev1.jpg";
import ev2 from "../assets/ev2.jpg";
import ev3 from "../assets/ev3.jpg";

import play1 from "../assets/play1.jpg";
import play2 from "../assets/play2.jpg";
import play3 from "../assets/play3.jpg";

const questions = [
  { id: 1, text: "The northeast monsoon wind blowing from Siberia causes __________.", images: [cold1, cold2, cold3], answer: "cold temperature" },
  { id: 2, text: "Siberia is a very frigid place. What is an antonym for the word frigid?", images: [warm1, warm2, warm3], answer: "very cold" },
  { id: 3, text: "You are going on a vacation at your cousin’s province in the eastern part of the country in March. What type of clothes should you bring?", images: [thin1, thin2, thin3], answer: "thin" },
  { id: 4, text: "Among these different air streams in the Philippines, which is the most appropriate for wearing very heavy clothes?", images: [winter1, winter2, winter3], answer: "northeast monsoons" },
  { id: 5, text: "What device did the author use to develop the selection?", images: [cause1, cause2, cause3], answer: "cause and effect" },
  { id: 6, text: "Who will go to the park?", images: [kid1, kid2, kid3], answer: "Sam and Ria" },
  { id: 7, text: "What will the children do in the park?", images: [bugs1, bugs2, bugs3], answer: "observe the insects" },
  { id: 8, text: "Why are the children not in school?", images: [vacation1, vacation2, vacation3], answer: "It is their summer vacation." },
  { id: 9, text: "When should the children leave the park?", images: [ev1, ev2, ev3], answer: "late afternoon" },
  { id: 10, text: "What else can the two children do at the park?", images: [play1, play2, play3], answer: "play with others" }
];

export default function FourPicsOneWord() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

 

  const checkAnswers = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id]?.toLowerCase() === q.answer.toLowerCase()) {
        correct++;
      }
    });
    setScore(correct);
    localStorage.setItem("fourPicScore", correct);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">4 PICS 1 ANSWER: READING COMPREHENSION GAME</h1>
    
    <div className="mb-6 bg-blue-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-3 text-blue-800">PART 1: AIR CURRENTS</h2>
      <p className="text-gray-700">
        Wind is the natural movement of the air from one place to another. It affects the climate of a place. There are three major air streams that greatly affect our climate. From November to February, mornings are colder because of the northeast monsoon wind. It blows from Siberia which is a very frigid place. It brings along temperature and rain that make us shiver. The wind from June to October, is warm and humid. During this time, the western section of our country experiences strong rains brought about by the southwest monsoon wind blowing from Australia. From March to early May, trade winds coming from the east or northeast reach the Philippines. It brings rains to the eastern part of our country. Trade winds are warm and moist and bring hot temperature with little rain. Isn't it amazing that each one of these air streams brings some amount of rain to the Philippines?
      </p>
    </div>
      {questions.slice(0, 5).map((q) => (
        <div key={q.id} className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
          <p className="mb-2 font-semibold">{q.text}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
            {q.images.map((img, index) => (
              <motion.img key={index} src={img} alt={`Hint ${index + 1}`} className="w-full h-24 object-cover rounded-lg" whileHover={{ scale: 1.1 }} />
            ))}
          </div>
          <input type="text" placeholder="Type your answer" value={answers[q.id] || ""} onChange={(e) => handleChange(q.id, e.target.value)} className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      ))}
      
      <div className="mt-8 mb-6 bg-green-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-3 text-green-800">PART 2: A DAY AT THE PARK</h2>
        <p className="text-gray-700">
          Today, Sam and Ria will go to the park.<br />
          What will they do there?<br />
          They will sit on the grass<br />
          and look at some bugs.<br /><br />

          They will look at the holes<br />
          that the worms have just dug.<br /><br />

          That is where they will stay<br />
          on this warm summer day.<br /><br />

          But they must leave the park<br />
          before it gets dark.
        </p>
      </div>
      {questions.slice(5, 10).map((q) => (
        <div key={q.id} className="mb-4 p-4 border rounded-lg shadow-lg bg-white">
          <p className="mb-2 font-semibold">{q.text}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
            {q.images.map((img, index) => (
              <motion.img key={index} src={img} alt={`Hint ${index + 1}`} className="w-full h-24 object-cover rounded-lg" whileHover={{ scale: 1.1 }} />
            ))}
          </div>
          <input type="text" placeholder="Type your answer" value={answers[q.id] || ""} onChange={(e) => handleChange(q.id, e.target.value)} className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      ))}
      
      <button onClick={checkAnswers} className="w-full bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition">Submit Answers</button>
      <p className="text-center mt-2 text-lg font-bold">Score: {score}/{questions.length}</p>
      <Link to="/" className="block text-center mt-4 text-blue-600 hover:underline">Go Home</Link>
    </div>
  );
}
