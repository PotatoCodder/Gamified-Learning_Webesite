import React, { useState, useEffect } from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";

const SpeechRecognitionTest = () => {
  const passage = `There are rocks in our Solar System that never flocked together to
                    form planets. Larger ones called asteroids gather in the Asteroid
                    Belt, a strip found between Mars and Jupiter. Some asteroids
                    don’t move along this belt but have paths that bring them close
                    to the earth. These are called Apollo Asteroids.

                    There may be half a million asteroids whose diameters
                    are bigger than one kilometer. The largest asteroid is over 1000
                    kilometers across. It is speculated that many asteroids were
                    once larger but they collided with each other and became small
                    fragments.

                    Unlike asteroids, meteoroids are small rocky bodies, that
                    are scattered in space and do not orbit the sun. They cross
                    the Earth’s orbit and are often seen burning up in the Earth’s
                    atmosphere at night. The faint flashes of light they make are
                    called shooting stars.`;  

  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [transcript, setTranscript] = useState("");
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
      };

      recognitionInstance.onerror = () => {
        setFeedback("Sorry, there was an error with the speech recognition.");
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    } else {
      setFeedback("Speech Recognition is not supported in this browser.");
    }
  }, []);

  const startListening = () => {
    setFeedback("Listening...");
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
    compareText(transcript);
  };

  const compareText = (userText) => {
    let errors = [];
    const userWords = userText.toLowerCase().split(" ");
    const originalWords = passage.toLowerCase().split(" ");

    for (let i = 0; i < originalWords.length; i++) {
      if (userWords[i] !== originalWords[i]) {
        if (userWords[i] === undefined) {
          errors.push(`Omission at position ${i + 1}: missing "${originalWords[i]}"`);
        } else if (originalWords.includes(userWords[i])) {
          errors.push(`Insertion: "${userWords[i]}" is extra`);
        } else {
          errors.push(`Substitution: "${userWords[i]}" instead of "${originalWords[i]}"`);
        }
      }
    }

    let repeatedWords = userWords.filter((word, index, self) => self.indexOf(word) !== index);
    repeatedWords = [...new Set(repeatedWords)];
    if (repeatedWords.length > 0) {
      errors.push(`Repetition: You repeated words like ${repeatedWords.join(", ")}`);
    }

    let transpositions = [];
    for (let i = 0; i < userWords.length - 1; i++) {
      if (userWords[i] === originalWords[i + 1] && userWords[i + 1] === originalWords[i]) {
        transpositions.push(`Transposition: "${userWords[i]}" and "${userWords[i + 1]}" are swapped`);
      }
    }

    if (errors.length === 0) {
      setFeedback("Correct! Well done.");
    } else {
      setFeedback(errors.join("\n"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white p-5">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Speech Recognition Reading Test</h1>

        <div className="mb-6">
          <p className="text-xl font-semibold">Read this passage aloud:</p>
          <div className="text-lg mt-4 text-gray-800" id="passage-container">
            <p>{passage}</p>
          </div>
        </div>

        <div className="mb-6 flex justify-center gap-4">
          <button
            onClick={startListening}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={isListening}
          >
            <FaMicrophone className="inline-block mr-2" />
            Start Reading
          </button>
          <button
            onClick={stopListening}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-700 disabled:opacity-50"
            disabled={!isListening}
          >
            <FaStop className="inline-block mr-2" />
            Stop Reading
          </button>
        </div>

        <div className="text-lg text-center mt-4">
          <p>{feedback}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeechRecognitionTest;
