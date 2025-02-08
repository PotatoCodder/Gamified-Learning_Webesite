/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { motion } from "framer-motion";
import "regenerator-runtime/runtime";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const passage = `There are rocks in our Solar System that never flocked together to form planets. Larger ones called asteroids gather in the Asteroid Belt, a strip found between Mars and Jupiter. Some asteroids don’t move along this belt but have paths that bring them close to the earth. These are called Apollo Asteroids.

There may be half a million asteroids whose diameters are bigger than one kilometer. The largest asteroid is over 1000 kilometers across. It is speculated that many asteroids were once larger but they collided with each other and became small fragments.

Unlike asteroids, meteoroids are small rocky bodies, that are scattered in space and do not orbit the sun. They cross the Earth’s orbit and are often seen burning up in the Earth’s atmosphere at night. The faint flashes of light they make are called shooting stars.`;

const SpeechRecognitionTest = () => {
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(1000);
  const [mistakes, setMistakes] = useState({});
  const [recognitionStarted, setRecognitionStarted] = useState(false);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [spokenWords, setSpokenWords] = useState([]);

  useEffect(() => {
    setSpokenWords(transcript.toLowerCase().split(" "));
  }, [transcript]);

  const startListening = () => {
    resetTranscript();
    setRecognitionStarted(true);
    setScore(1000);
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const stopListening = () => {
    setRecognitionStarted(false);
    SpeechRecognition.stopListening();
    compareText(transcript);
  };

  const compareText = (userText) => {
    const userWords = userText.toLowerCase().split(" ");
    const originalWords = passage.toLowerCase().split(" ");
    let errors = [];
    let mistakeCounts = {
      mispronunciation: 0,
      omission: 0,
      substitution: 0,
      insertion: 0,
      repetition: 0,
      transposition: 0,
      reversal: 0,
    };

    let i = 0, j = 0;
    while (i < originalWords.length || j < userWords.length) {
      if (originalWords[i] === userWords[j]) {
        i++;
        j++;
      } else if (userWords[j] && !originalWords.includes(userWords[j])) {
        errors.push(`Insertion: "${userWords[j]}" at position ${j + 1}`);
        mistakeCounts.insertion++;
        j++;
      } else if (!userWords[j]) {
        errors.push(`Omission: Missing "${originalWords[i]}" at position ${i + 1}`);
        mistakeCounts.omission++;
        i++;
      } else if (originalWords[i] !== userWords[j]) {
        errors.push(`Substitution: Expected "${originalWords[i]}", but got "${userWords[j]}"`);
        mistakeCounts.substitution++;
        i++;
        j++;
      }
    }

    // Score calculation based on mistake details
    let calculatedScore = 1000;
    calculatedScore -= mistakeCounts.omission * 10;
    calculatedScore -= mistakeCounts.substitution * 7;
    calculatedScore -= mistakeCounts.insertion * 5;
    calculatedScore -= mistakeCounts.mispronunciation * 5;
    calculatedScore -= mistakeCounts.repetition * 3;
    calculatedScore -= mistakeCounts.transposition * 3;
    calculatedScore -= mistakeCounts.reversal * 3;

    calculatedScore = Math.max(calculatedScore, 100); // Minimum score of 100
    setScore(calculatedScore);
    setMistakes(mistakeCounts);

    setFeedback(errors.length === 0 ? "Perfect!" : errors.join("\n"));
  };

  const getHighlightedText = () => {
    return passage.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className={spokenWords.includes(word.toLowerCase()) ? "bg-yellow-300 px-1" : ""}
      >
        {word}{" "}
      </motion.span>
    ));
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-5 text-white bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
      <div className="w-full p-6 bg-white rounded-lg shadow-lg sm:max-w-lg">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">
          Speech Recognition Test
        </h1>

        <div className="mb-6">
          <p className="text-xl font-semibold">Read this passage aloud:</p>
          <div className="mt-4 text-lg text-gray-800">{getHighlightedText()}</div>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={startListening}
            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={recognitionStarted || listening}
          >
            <FaMicrophone className="inline-block mr-2" /> Start Reading
          </button>
          <button
            onClick={stopListening}
            className="px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-700 disabled:opacity-50"
            disabled={!recognitionStarted || !listening}
          >
            <FaStop className="inline-block mr-2" /> Stop Reading
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xl font-bold">Score: {score}/1000</p>

          <div className="p-4 mt-6 text-gray-800 bg-gray-100 border border-gray-300 rounded-md">
            <h3 className="mb-2 text-lg font-semibold">Mistake Details:</h3>
            <ul className="text-left">
              <li><strong>Omissions:</strong> {mistakes.omission}</li>
              <li><strong>Substitutions:</strong> {mistakes.substitution}</li>
              <li><strong>Insertions:</strong> {mistakes.insertion}</li>
              <li><strong>Mispronunciations:</strong> {mistakes.mispronunciation}</li>
              <li><strong>Repetitions:</strong> {mistakes.repetition}</li>
              <li><strong>Transpositions:</strong> {mistakes.transposition}</li>
              <li><strong>Reversals:</strong> {mistakes.reversal}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeechRecognitionTest;
