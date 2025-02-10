/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const words = [
  { word: "speculated", meaning: "to form a theory or guess without sufficient evidence" },
  { word: "habits", meaning: "the manner by which one repeatedly does a task" },
  { word: "resolved", meaning: "how our brain might deal with or solve problems" },
  { word: "dangerous", meaning: "something likely to cause harm or risk to safety" },
  { word: "enthusiasm", meaning: "intense enjoyment or excitement" },
  { word: "critical", meaning: "important or essential for a particular purpose" },
  { word: "deliberate", meaning: "done intentionally or with careful thought" },
  { word: "fragile", meaning: "easily broken or damaged" },
  { word: "innovative", meaning: "introducing new ideas or methods" }
];

const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

const VocabularyMemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [popupContent, setPopupContent] = useState(null);
  const [timer, setTimer] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setCards(shuffleArray([...words, ...words]));

    // ✅ Load score from memoryGameScore (fixed)
    const storedScore = localStorage.getItem("memoryGameScore");
    if (storedScore) {
      setScore(parseInt(storedScore, 10));
    }
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setIsGameOver(true);
    }
    const interval = setInterval(() => {
      if (!isGameOver && timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isGameOver]);

  const flipCard = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index) || isGameOver) return;
    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const [firstIndex] = flippedCards;
      if (cards[firstIndex].word === cards[index].word && firstIndex !== index) {
        setMatchedCards([...matchedCards, firstIndex, index]);

        // ✅ Correctly update and save score in memoryGameScore
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          localStorage.setItem("memoryGameScore", newScore);
          return newScore;
        });

        setPopupContent(cards[index].meaning);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const restartGame = () => {
    setCards(shuffleArray([...words, ...words]));
    setFlippedCards([]);
    setMatchedCards([]);
    setTimer(60);
    setIsGameOver(false);
    setPopupContent(null);
    setScore(0);
    localStorage.setItem("memoryGameScore", "0"); // ✅ Reset score in memoryGameScore
  };

  // ✅ Save score before moving to another game mode
  const saveScoreAndNavigate = (path) => {
    localStorage.setItem("memoryGameScore", score);
    window.location.href = path; // Force navigation while ensuring score is saved
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800 sm:text-5xl">
        Vocabulary Memory Game
      </h1>

      <div className="mb-6 text-xl font-semibold text-center">
        <span className="text-gray-800">Time Left: {timer}s</span>
        {isGameOver && <p className="mt-2 text-red-600">Game Over!</p>}
      </div>

      {isGameOver && (
        <button
          onClick={restartGame}
          className="px-6 py-2 mt-4 mb-8 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
        >
          Try Again
        </button>
      )}

      <button
        onClick={restartGame}
        className="px-6 py-2 mt-4 mb-8 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Restart Game
      </button>

      {/* Display Score */}
      <div className="mb-4 text-lg font-semibold text-center">
        <span className="text-gray-800">Score: {score}</span>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative w-24 h-24 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 ${
                flippedCards.includes(index) || matchedCards.includes(index)
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => flipCard(index)}
            >
              <div
                className={`absolute w-full h-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                {card.word}
              </div>
              <div
                className={`absolute w-full h-full flex items-center justify-center text-3xl font-bold transition-all duration-500 ${
                  flippedCards.includes(index) || matchedCards.includes(index)
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              >
                ?
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Save Score Before Navigating */}
        <div className="flex gap-4 mt-6">
          <button
            className="px-6 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
            onClick={() => saveScoreAndNavigate("/wordle")}
          >
            Skip
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={() => saveScoreAndNavigate("/wordle")}
          >
            Next
          </button>
        </div>
      </div>
      {/* Popup for Meaning */}
      {popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-sm p-6 mx-auto text-center bg-white rounded-lg shadow-lg">
            <p className="mb-4 text-lg font-semibold">{popupContent}</p>
            <button
              className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
              onClick={() => setPopupContent(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyMemoryGame;