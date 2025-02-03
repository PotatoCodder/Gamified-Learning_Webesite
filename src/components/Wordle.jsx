import React, { useState, useEffect } from "react";

// List of 20 possible words
const wordList = [
  "apple", "grape", "peach", "lemon", "cherry", "mango", "melon", "berry", "plumb", "grape",
  "candy", "house", "table", "chair", "liver", "water", "earth", "stone", "paper", "brave"
];

const WordleGame = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(Array(6).fill("")); // Initialize with empty strings for 6 rows
  const [isGameOver, setIsGameOver] = useState(false);
  const [targetWord, setTargetWord] = useState("");

  // Select a random word from the list on page load
  useEffect(() => {
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setTargetWord(randomWord);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return; // Make sure guess is 5 letters

    const newAttempts = [...attempts];
    const nextEmptyIndex = attempts.findIndex((attempt) => attempt === "");
    if (nextEmptyIndex !== -1) {
      newAttempts[nextEmptyIndex] = guess;
      setAttempts(newAttempts);
    }

    setGuess("");

    // Check if guess is correct or if max attempts reached
    if (guess === targetWord) {
      setIsGameOver(true);
    } else if (newAttempts.filter(attempt => attempt !== "").length === 6) {
      setIsGameOver(true);
    }
  };

  const getColor = (letter, index) => {
    if (targetWord[index] === letter) return "bg-green-500"; // Correct letter in correct place
    if (targetWord.includes(letter)) return "bg-yellow-500"; // Correct letter, wrong place
    return "bg-gray-400"; // Incorrect letter
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-4 text-center">Wordle Game</h1>

        {/* Display the grid with all 6 rows of 5 boxes */}
        <div className="mb-4">
          {attempts.map((attempt, idx) => (
            <div key={idx} className="flex mb-2">
              {Array.from("     ").map((_, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 flex items-center justify-center rounded-md 
                    ${attempt[index] ? getColor(attempt[index], index) : 'border border-gray-400'}`}
                >
                  {attempt[index] && attempt[index].toUpperCase()}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Input box and submit button */}
        {!isGameOver && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value.toLowerCase())}
              className="w-full p-2 border rounded-md"
              maxLength="5"
              disabled={isGameOver}
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md"
              disabled={isGameOver}
            >
              Submit Guess
            </button>
          </form>
        )}

        {/* Display the game outcome */}
        {isGameOver && (
          <div className="mt-4 text-center text-xl font-bold">
            {guess === targetWord ? "You Win!" : `Game Over! The word was "${targetWord.toUpperCase()}"`}
          </div>
        )}
      </div>
    </div>
  );
};
export default WordleGame;