import React, { useState, useEffect } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import { motion } from "framer-motion";
import _ from "lodash";

const passages = [
  `The solar system is vast, filled with planets, asteroids, and mysteries beyond our reach.`,
  `Language is the bridge that connects humanity, allowing thoughts and ideas to be shared.`,
  `Technology evolves rapidly, shaping the way we interact, learn, and experience the world.`
];

const SpeechRecognitionTest = () => {
  const [currentPassage, setCurrentPassage] = useState(_.sample(passages));
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [transcript, setTranscript] = useState("");
  const [spokenWords, setSpokenWords] = useState([]);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognitionAPI();
      recognitionInstance.lang = "en-US";
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      
      recognitionInstance.onresult = (event) => {
        const result = event.results[0][0].transcript;
        setTranscript(result);
        setSpokenWords(result.toLowerCase().split(" "));
      };
      
      recognitionInstance.onerror = () => {
        setFeedback("Error with speech recognition.");
        setIsListening(false);
      };
      
      setRecognition(recognitionInstance);
    } else {
      setFeedback("Speech Recognition is not supported in this browser.");
    }
  }, []);

  useEffect(() => {
    if (spokenWords.length >= currentPassage.split(" ").length) {
      stopListening();
    }
  }, [spokenWords]);

  const startListening = () => {
    setFeedback("Listening...");
    setIsListening(true);
    setSpokenWords([]);
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
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
    return currentPassage.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className={spokenWords.includes(word.toLowerCase()) ? "bg-yellow-300 px-1" : ""}
      >
        {word} {" "}
      </motion.span>
    ));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Speech Recognition Test</h1>

        <div className="mb-6">
          <p className="text-xl font-semibold">Read this passage aloud:</p>
          <div className="text-lg mt-4 text-gray-800">
            {getHighlightedText()}
          </div>
        </div>

        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={startListening}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={isListening}
          >
            <FaMicrophone className="inline-block mr-2" /> Start Reading
          </button>
          <button
            onClick={stopListening}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:opacity-50"
            disabled={!isListening}
          >
            <FaStop className="inline-block mr-2" /> Stop Reading
          </button>
        </div>

        <div className="text-lg text-center mt-4">
          <p>{feedback}</p>
        </div>

        <button
          onClick={() => setCurrentPassage(_.sample(passages))}
          className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Try Another Passage
        </button>
      </div>
    </div>
  );
};

export default SpeechRecognitionTest;
