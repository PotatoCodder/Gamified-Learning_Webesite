import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FourPicsOneWord = () => {
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');
  const correctAnswer = "fan"; // Fixed correct answer

  // Load score from localStorage
  useEffect(() => {
    const savedScore = localStorage.getItem('fourPicOneWordScore');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);

    if (guess.toLowerCase() === correctAnswer) {
      const newScore = score + 10;
      setScore(newScore);
      localStorage.setItem('fourPicOneWordScore', newScore);
      setMessage('✅ Correct! The answer is "Fan".');
    } else {
      setMessage('❌ Incorrect answer. The correct answer was "Fan".');
    }

    setGuess('');
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
        >
          Submit
        </button>
      </form>

      {/* Feedback message */}
      {message && (
        <div className="mt-8 text-lg font-semibold text-center">
          <p>{message}</p>
        </div>
      )}

      {/* Always show the link to /vocab-quiz */}
      <div className="flex justify-center mt-6">
        <Link
          to="/vocab-quiz"
          className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Go to Next Quiz
        </Link>
      </div>
    </div>
  );
};

export default FourPicsOneWord;
