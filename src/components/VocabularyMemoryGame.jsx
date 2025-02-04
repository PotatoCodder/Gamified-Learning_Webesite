import React, { useState, useEffect } from "react";

// Vocabulary words (only 9 unique words, repeated to make 18)
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

// Shuffle function for randomizing the array
const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

const VocabularyMemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [popupContent, setPopupContent] = useState(null);
  const [timer, setTimer] = useState(60); // 60-second timer
  const [isGameOver, setIsGameOver] = useState(false);

  // Shuffle cards on game start
  useEffect(() => {
    setCards(shuffleArray([...words, ...words])); // Duplicate words to get 18 cards
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timer === 0) {
      setIsGameOver(true);
    }
    const interval = setInterval(() => {
      if (!isGameOver && timer > 0) {
        setTimer(timer - 1);
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
  };

  const tryAgain = () => {
    setCards(shuffleArray([...words, ...words]));
    setFlippedCards([]);
    setMatchedCards([]);
    setTimer(60);
    setIsGameOver(false);
    setPopupContent(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">Vocabulary Memory Game</h1>

      {/* Timer and Restart Button */}
      <div className="mb-6 text-xl font-semibold">
        <span className="text-gray-800">Time Left: {timer}s</span>
        {isGameOver && <p className="text-red-600 mt-2">Game Over!</p>}
      </div>

      {/* Display Try Again Button when the game is over */}
      {isGameOver && (
        <button
          onClick={tryAgain}
          className="px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 mt-4 mb-8"
        >
          Try Again
        </button>
      )}

      {/* Restart button */}
      <button
        onClick={restartGame}
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 mt-4 mb-8"
      >
        Restart Game
      </button>

      {/* Grid layout for the game cards */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-24 sm:w-32 h-24 sm:h-32 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 ${
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

      {/* Popup content for the meaning of the word */}
      {popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg max-w-sm mx-auto">
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
