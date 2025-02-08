import React, { useState } from "react";
import { Link } from 'react-router-dom';

const questions = [
  { question: "What is the synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
  { question: "Which word means the opposite of 'cold'?", options: ["Hot", "Warm", "Cool", "Freezing"], answer: "Hot" },
  { question: "What is the meaning of 'benevolent'?", options: ["Kind and generous", "Evil and cruel", "Neutral", "Lazy"], answer: "Kind and generous" },
  { question: "What is the synonym of 'fast'?", options: ["Quick", "Slow", "Lazy", "Boring"], answer: "Quick" },
  { question: "Which word is an antonym of 'strong'?", options: ["Weak", "Powerful", "Brave", "Confident"], answer: "Weak" },
  { question: "What does 'lucid' mean?", options: ["Clear and easy to understand", "Difficult to see", "Dark and scary", "Complicated"], answer: "Clear and easy to understand" },
  { question: "Which of these words is a synonym for 'angry'?", options: ["Furious", "Happy", "Excited", "Calm"], answer: "Furious" },
  { question: "What is the opposite of 'expand'?", options: ["Shrink", "Grow", "Increase", "Enlarge"], answer: "Shrink" },
  { question: "What does 'gregarious' mean?", options: ["Sociable and outgoing", "Shy and introverted", "Angry", "Lonely"], answer: "Sociable and outgoing" },
  { question: "Which word means 'very small'?", options: ["Tiny", "Huge", "Massive", "Gigantic"], answer: "Tiny" },
  { question: "What is the synonym of 'difficult'?", options: ["Hard", "Easy", "Simple", "Light"], answer: "Hard" },
  { question: "Which word means 'to make something less severe'?", options: ["Alleviate", "Worsen", "Intensify", "Aggravate"], answer: "Alleviate" },
  { question: "What does 'eloquent' mean?", options: ["Fluent and persuasive in speaking", "Dull and boring", "Hard to understand", "Angry"], answer: "Fluent and persuasive in speaking" },
  { question: "What is an antonym of 'generous'?", options: ["Stingy", "Kind", "Charitable", "Giving"], answer: "Stingy" },
  { question: "Which word is a synonym of 'brave'?", options: ["Courageous", "Cowardly", "Fearful", "Weak"], answer: "Courageous" },
  { question: "What is the opposite of 'ascend'?", options: ["Descend", "Rise", "Lift", "Jump"], answer: "Descend" }
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const QuizGame = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray([...questions]));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setShuffledQuestions(shuffleArray([...questions]));
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-lg p-6 text-center bg-white border border-gray-300 rounded-lg shadow-xl">
        {showScore ? (
          <div>
            <h2 className="text-3xl font-bold text-green-600">Your score: {score} / {shuffledQuestions.length}</h2>
            <button className="px-5 py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700" onClick={restartQuiz}>
              Restart Quiz
            </button> <br />
            <Link
              to="/speechrecognition">
              <button className="px-5 py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                Go to Speech Recognition
              </button>
            </Link>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Question {currentQuestion + 1} of {shuffledQuestions.length}</h2>
            <p className="mt-4 text-lg font-medium text-gray-700">{shuffledQuestions[currentQuestion].question}</p>
            <div className="mt-6 space-y-3">
              {shuffledQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="block w-full px-5 py-3 text-lg font-medium transition bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizGame;
