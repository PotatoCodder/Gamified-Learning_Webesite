import React, { useState, useEffect } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { motion } from "framer-motion";
import _ from "lodash";
import "regenerator-runtime/runtime";

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const passages = [
  `The solar system is vast, filled with planets, asteroids, and mysteries beyond our reach.`,
  `Language is the bridge that connects humanity, allowing thoughts and ideas to be shared.`,
  `Technology evolves rapidly, shaping the way we interact, learn, and experience the world.`
];

const SpeechRecognitionTest = () => {
  const [currentPassage, setCurrentPassage] = useState(_.sample(passages));
  const [feedback, setFeedback] = useState("");
  const [recognitionStarted, setRecognitionStarted] = useState(false);
  const { transcript, resetTranscript, listening } = useSpeechRecognition();

  const [spokenWords, setSpokenWords] = useState([]);

  useEffect(() => {
    // This will split the spoken words into an array and keep them updated
    setSpokenWords(transcript.toLowerCase().split(" "));
  }, [transcript]);

  const startListening = () => {
    resetTranscript(); // Reset previous transcript
    setRecognitionStarted(true);
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const stopListening = () => {
    setRecognitionStarted(false);
    SpeechRecognition.stopListening();
    compareText(transcript);
  };

  const compareText = (userText) => {
    const userWords = userText.toLowerCase().split(" ");
    const originalWords = currentPassage.toLowerCase().split(" ");
    let errors = [];

    for (let i = 0; i < originalWords.length; i++) {
      if (userWords[i] !== originalWords[i]) {
        errors.push(`Error at word ${i + 1}: Expected "${originalWords[i]}", but got "${userWords[i] || "[missing]"}"`);
      }
    }

    setFeedback(errors.length === 0 ? "Perfect!" : errors.join("\n"));
  };

  const getHighlightedText = () => {
    // Split the current passage into individual words and check if they match spoken words
    return currentPassage.split(" ").map((word, index) => (
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
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">Speech Recognition Test</h1>

        <div className="mb-6">
          <p className="text-xl font-semibold">Read this passage aloud:</p>
          <div className="mt-4 text-lg text-gray-800">
            {getHighlightedText()}
          </div>
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

        <div className="mt-4 text-lg text-center">
          <p>{feedback}</p>
        </div>

        <button
          onClick={() => setCurrentPassage(_.sample(passages))}
          className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-700"
        >
          Try Another Passage
        </button>
      </div>
    </div>
  );
};

export default SpeechRecognitionTest;
