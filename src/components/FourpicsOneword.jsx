import React, { useState } from 'react';

const FourPicsOneWord = () => {
  const [guess, setGuess] = useState('');

  // Placeholder function for handling submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted guess:', guess);
    // Add your logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Four Pics One Word</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-2xl">Image {num}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          className="w-full max-w-md px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>

      {/* Placeholder for score or feedback */}
      <div className="mt-8 text-center text-lg font-semibold">
        Score: 0 | Attempts: 0
      </div>
    </div>
  );
};

export default FourPicsOneWord;
