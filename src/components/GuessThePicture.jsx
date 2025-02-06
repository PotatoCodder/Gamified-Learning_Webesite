import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import equator from '../assets/equator.webp';
import seaVent from '../assets/seaVent.jpg';
import antik from '../assets/antik.jpg';

const GuessThePicture = () => {
    console.log("guess the picture score", localStorage.getItem("guessGameScore"));
  const games = [
    {
      imageUrl: equator,
      correctAnswer: "Equator",
      hint: "This is the center of the Earth.",
      options: ["Tropic of Cancer", "Equator", "Prime Meridian", "International Date Line"]
    },
    {
      imageUrl: seaVent,
      correctAnswer: "Deep Sea Vent",
      hint: "A place underwater where heat escapes from Earth's crust.",
      options: ["Coral Reef", "Deep Sea Vent", "Underwater Volcano", "Mariana Trench"]
    },
    {
      imageUrl: antik,
      correctAnswer: "Antikythera Mechanism",
      hint: "An ancient Greek device believed to be the first analog computer.",
      options: ["Sundial", "Antikythera Mechanism", "Astronomical Clock", "Compass"]
    }
  ];

  const [currentGame, setCurrentGame] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedScore = localStorage.getItem("guessGameScore");
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("guessGameScore", score);
  }, [score]);

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === games[currentGame].correctAnswer) {
      setScore(score + 10);
      setResult("Correct! 🎉");
    } else {
      setResult("Wrong! ❌");
    }
    setTimeout(() => {
      if (currentGame < games.length - 1) {
        setCurrentGame(currentGame + 1);
        setSelectedAnswer(null);
        setResult("");
      } else {
        setResult(`Game Over! Your final score: ${score + (answer === games[currentGame].correctAnswer ? 10 : 0)}`);
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center max-w-md gap-4 p-4 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Guess the Picture</h2>
      <p className="text-lg font-semibold">Score: {score}</p>
      <img src={games[currentGame].imageUrl} alt="Guess the image" className="object-cover w-64 h-64 rounded-lg shadow-md" />
      <p className="text-sm italic">Hint: {games[currentGame].hint}</p>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {games[currentGame].options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => checkAnswer(option)} 
            className={`px-4 py-2 text-white rounded-lg transition-all ${
              selectedAnswer === option 
                ? option === games[currentGame].correctAnswer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      {result && <p className="mt-4 text-lg font-semibold">{result}</p>}
      {currentGame === games.length - 1 && result.includes("Game Over") && (
        <Link to="/wordle" className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Go to Wordle</Link>
      )}
      <button 
        onClick={() => navigate("/wordle")} 
        className="px-4 py-2 mt-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        Skip Quiz
      </button>
    </div>
  );
};

export default GuessThePicture;