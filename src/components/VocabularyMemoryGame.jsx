import React, { useState, useEffect } from "react";

const words = [
  { word: "speculated", meaning: "to form a theory or guess without sufficient evidence" },
  { word: "habits", meaning: "the manner by which one repeatedly does a task" },
  { word: "resolved", meaning: "how our brain might deal with or solve problems" },
  { word: "dangerous", meaning: "something likely to cause harm or risk to safety" }
];

const shuffleArray = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

const VocabularyMemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    setCards(shuffleArray([...words, ...words]));
  }, []);

  const flipCard = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index)) return;
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

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-gradient-to-r from-gray-100 to-blue-100">
      <h1 className="mb-6 text-4xl font-bold text-gray-800">Vocabulary Memory Game</h1>
      <div className="grid grid-cols-4 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-36 h-36 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold cursor-pointer transition-transform duration-500 transform ${flippedCards.includes(index) || matchedCards.includes(index) ? "rotate-y-180 bg-green-500 text-white" : "bg-white"}`}
            onClick={() => flipCard(index)}
          >
            {flippedCards.includes(index) || matchedCards.includes(index) ? card.word : "?"}
          </div>
        ))}
      </div>
      {popupContent && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <p className="mb-4 text-lg font-semibold">{popupContent}</p>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg" onClick={() => setPopupContent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyMemoryGame;
