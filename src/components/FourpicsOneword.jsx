import React, { useState, useEffect } from 'react';

const FourPicsOneWord = () => {
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const correctAnswer = "fan"; // The correct answer

  // Load previous score from localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem('fourPicOneWordScore');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  // Handle submitting a guess
  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);

    if (guess.toLowerCase() === correctAnswer) {
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem('fourPicOneWordScore', newScore);
      setIsGameOver(true); // Game over if the answer is correct
    } else {
      alert('Incorrect answer. Try again!');
    }

    setGuess('');
  };

  // Handle skipping the round
  const handleSkip = () => {
    setGuess('');
    setAttempts(attempts + 1);
    setIsGameOver(true); // Skip to the next round or end the current round
  };

  // Handle next round
  const handleNext = () => {
    setIsGameOver(false);
    setGuess('');
    setAttempts(0); // Reset attempts for the new round
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center">Four Pics One Word</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="flex items-center justify-center w-full max-w-xs bg-gray-200 rounded-lg aspect-square"
            style={{ height: '200px' }}
          >
            <span className="text-2xl text-gray-500">Image {num}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-md">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className="w-full px-4 py-2 mb-4 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
          disabled={isGameOver}
        >
          Submit
        </button>
      </form>

      {/* Feedback section */}
      <div className="mt-8 text-lg font-semibold text-center">
        <p>Score: {score} | Attempts: {attempts}</p>
        {isGameOver && (
          <p className="text-green-500">Correct! The answer is "Fan".</p>
        )}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {!isGameOver ? (
          <>
            <button
              onClick={handleSkip}
              className="px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Skip
            </button>
          </>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FourPicsOneWord;
