/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const wordList = [
  "apple", "grape", "peach", "lemon", "cherry", "mango", "melon", "berry", "plumb", "grape",
  "candy", "house", "table", "chair", "liver", "water", "earth", "stone", "paper", "brave"
];

const WordleGame = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(Array(6).fill(""));
  const [isGameOver, setIsGameOver] = useState(false);
  const [targetWord, setTargetWord] = useState("");
  const [score, setScore] = useState(0);

  const gifUrl = "https://steamuserimages-a.akamaihd.net/ugc/1732171141379868306/BB6C147DA9BA7B58F1489C00F13549FCCA8F268A/";

  useEffect(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(randomWord);
  }, []);

  useEffect(() => {
    const savedScore = localStorage.getItem("wordleScore");
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  useEffect(() => {
    if (isGameOver && attempts.includes(targetWord)) {
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem("wordleScore", newScore);
    }
  }, [isGameOver]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;

    const newAttempts = [...attempts];
    const nextEmptyIndex = attempts.findIndex((attempt) => attempt === "");
    if (nextEmptyIndex !== -1) {
      newAttempts[nextEmptyIndex] = guess;
      setAttempts(newAttempts);
    }
    setGuess("");

    if (guess === targetWord || newAttempts.filter(a => a !== "").length === 6) {
      setIsGameOver(true);
    }
  };

  const getColor = (letter, index) => {
    if (targetWord[index] === letter) return "bg-green-500";
    if (targetWord.includes(letter)) return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-lg p-8 text-center bg-white rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${gifUrl})`, backgroundSize: "cover" }}>
        <h1 className="mb-4 text-2xl font-semibold">Wordle Game</h1>

        <div className="mb-4">
          {attempts.map((attempt, idx) => (
            <div key={idx} className="flex justify-center mb-2">
              {Array.from("     ").map((_, index) => (
                <div key={index} className={`w-14 h-14 flex items-center justify-center rounded-md border border-gray-400 text-lg font-bold ${attempt[index] ? getColor(attempt[index], index) : ''}`}>
                  {attempt[index] && attempt[index].toUpperCase()}
                </div>
              ))}
            </div>
          ))}
        </div>

        {!isGameOver && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value.toLowerCase())}
              className="w-full p-2 text-center border rounded-md"
              maxLength="5"
            />
            <button type="submit" className="w-full p-2 mt-2 text-white bg-blue-500 rounded-md">Submit Guess</button>
          </form>
        )}

        {isGameOver && (
          <div className="mt-4 text-xl font-bold">
            {attempts.includes(targetWord) ? "You Win!" : `Game Over! The word was "${targetWord.toUpperCase()}"`}
          </div>
        )}

        <div className="mt-4">
          {/* Skip link always visible */}
          <a href="/vocabquiz" className="block p-2 mt-2 text-white bg-red-500 rounded-md">Skip</a>
        </div>

        {isGameOver && (
          <div className="mt-4">
            <a href="/vocabquiz" className="block p-2 mt-2 text-white bg-green-500 rounded-md">Next</a>
          </div>
        )}

      </div>
    </div>
  );
};

export default WordleGame;
