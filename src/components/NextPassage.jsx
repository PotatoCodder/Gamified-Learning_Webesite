import React, { useState, useEffect } from 'react';

// Data for the passages and questions
const passages = [
  {
    text: "The Best Part of the Day: Mia was in her bedroom when she heard a rooster crow. Then she heard a man yell, “Hot pandesal! Buy your hot pandesal!” Mia wanted to sleep some more. But she knew she might be late for school if she did. Finally, she began to smell fried eggs and fish. “It’s time to get up,” she said. Mia jumped out of bed and ran down the steps.",
    question: "At the beginning of the story, where was Mia? \nA. ) She was in her bedroom \nB. ) She was in the kitchen \nC. ) She was outside \nD. ) She was at school",
    correctAnswer: "A",
    choices: ["She was in her bedroom", "She was in the kitchen", "She was outside", "She was at school"],
  },
  {
    text: "The Best Part of the Day: Mia was in her bedroom when she heard a rooster crow. Then she heard a man yell, “Hot pandesal! Buy your hot pandesal!” Mia wanted to sleep some more. But she knew she might be late for school if she did. Finally, she began to smell fried eggs and fish. “It’s time to get up,” she said. Mia jumped out of bed and ran down the steps.",
    question: "What time of the day was it? \nA. ) early in the morning \nB. ) late at night \nC. ) in the afternoon \nD. ) midday",
    correctAnswer: "A",
    choices: ["early in the morning", "late at night", "in the afternoon", "midday"],
  },
  {
    text: "The Best Part of the Day: Mia was in her bedroom when she heard a rooster crow. Then she heard a man yell, “Hot pandesal! Buy your hot pandesal!” Mia wanted to sleep some more. But she knew she might be late for school if she did. Finally, she began to smell fried eggs and fish. “It’s time to get up,” she said. Mia jumped out of bed and ran down the steps.",
    question: "What will she say when she gets up? \nA. ) Good morning! \nB. ) Good night! \nC. ) What’s for breakfast? \nD. ) Let me sleep!",
    correctAnswer: "A",
    choices: ["Good morning!", "Good night!", "What’s for breakfast?", "Let me sleep!"],
  },
];

function NextPassage() {
  const [score, setScore] = useState(0);
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showGame, setShowGame] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [gameMessage, setGameMessage] = useState('');
  
  const passage = passages[currentPassageIndex];

  useEffect(() => {
    // Initialize the guessing game when a new passage is loaded
    setRandomNumber(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10
  }, [currentPassageIndex]);

  const checkAnswer = () => {
    if (playerAnswer.trim().toUpperCase() === passage.correctAnswer) {
      setFeedback("Correct!");
      setScore(score + 10);
      setShowGame(true);
    } else {
      setFeedback("Wrong answer! Try again.");
    }
  };

  const nextPassage = () => {
    if (currentPassageIndex < passages.length - 1) {
      setCurrentPassageIndex(currentPassageIndex + 1);
      setPlayerAnswer('');
      setFeedback('');
      setShowGame(false);
      setAttempts(0);
    } else {
      setFeedback(`You completed all passages! Your final score is: ${score}`);
    }
  };

  const resetGame = () => {
    setAttempts(0);
    setGameMessage('');
    setGuess('');
    setShowGame(false);
  };

  const checkGuess = () => {
    const playerGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (playerGuess === randomNumber) {
      setGameMessage(`Congratulations! You guessed it right in ${attempts} attempts!`);
      setShowGame(false);
      nextPassage();
    } else if (playerGuess < randomNumber) {
      setGameMessage("Too low! Try again.");
    } else {
      setGameMessage("Too high! Try again.");
    }

    if (attempts === 3) {
      setGameMessage((prev) => prev + " Hint: Try numbers closer to the middle!");
    } else if (attempts === 5) {
      setGameMessage((prev) => prev + " Hint: Remember the range!");
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundImage: 'url("https://i.pinimg.com/736x/aa/ed/10/aaed10e8235d0a3a59e6db5e7879291c.jpg")', backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#cbe7ff', borderRadius: '15px', padding: '20px', width: '100%', maxWidth: '700px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <div id="passage-container">
          <h1>Reading Passage</h1>
          <p>{passage.text}</p>
        </div>

        <div id="question-container">
          <h2>Comprehension Question:</h2>
          <p>{passage.question}</p>
          <input 
            type="text" 
            value={playerAnswer} 
            onChange={(e) => setPlayerAnswer(e.target.value)} 
            placeholder="Enter your answer here" 
            style={{ padding: '10px', width: '80%', marginTop: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button onClick={checkAnswer} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Answer</button>
        </div>

        <div id="feedback" style={{ fontWeight: 'bold', color: feedback === "Correct!" ? 'green' : 'red' }}>
          {feedback}
        </div>

        {showGame && (
          <div id="game-container" style={{ marginTop: '20px' }}>
            <h2>Guess the Number Game!</h2>
            <p>Guess a number between 1 and 10:</p>
            <input 
              type="number" 
              value={guess} 
              onChange={(e) => setGuess(e.target.value)} 
              placeholder="Your guess" 
              min="1" 
              max="10"
              style={{ padding: '10px', width: '80%', marginTop: '10px' }}
            />
            <button onClick={checkGuess} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#28a745', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Guess</button>
            <button onClick={resetGame} style={{ marginTop: '10px', padding: '10px', backgroundColor: '#dc3545', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Reset Game</button>
            <div>{gameMessage}</div>
          </div>
        )}

        <button 
          onClick={nextPassage} 
          style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white', fontSize: '16px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Next Question
        </button>
      </div>
    </div>
  );
}

export default NextPassage;
