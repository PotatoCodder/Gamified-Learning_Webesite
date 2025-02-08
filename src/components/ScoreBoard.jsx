/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { FaTrophy, FaBrain, FaImage, FaFont, FaBook, FaMicrophone } from "react-icons/fa";
import { GiPuzzle } from "react-icons/gi";

export default function ScoreBoard() {
  const getScore = (key) => parseInt(localStorage.getItem(key)) || 0;

  const [fourPicsOneWord, setFourPicsOneWord] = useState(getScore("fourPicOneWordScore"));
  const [memoryGame, setMemoryGame] = useState(getScore("memoryGameScore"));
  const [guessThePicture, setGuessThePicture] = useState(getScore("guessGameScore"));
  const [wordle, setWordle] = useState(getScore("wordleScore"));
  const [vocabquiz, setVocabQuiz] = useState(getScore("vocabQuizScore"));
  const [speechRecognitionScore, setSpeechRecognitionScore] = useState(getScore("speechRecognitionScore"));

  const totalScore =
    fourPicsOneWord + memoryGame + guessThePicture + wordle + vocabquiz + speechRecognitionScore;

  const gameScores = [
    { name: "Four Pics One Word", score: fourPicsOneWord, icon: <GiPuzzle /> },
    { name: "Memory Game", score: memoryGame, icon: <FaBrain /> },
    { name: "Guess The Picture", score: guessThePicture, icon: <FaImage /> },
    { name: "Wordle", score: wordle, icon: <FaFont /> },
    { name: "Vocabulary Quiz", score: vocabquiz, icon: <FaBook /> },
    { name: "Speech Recognition", score: speechRecognitionScore, icon: <FaMicrophone /> },
  ];

  const resetScores = () => {
    localStorage.setItem("fourPicOneWordScore", 0);
    localStorage.setItem("memoryGameScore", 0);
    localStorage.setItem("guessGameScore", 0);
    localStorage.setItem("wordleScore", 0);
    localStorage.setItem("vocabQuizScore", 0);
    localStorage.setItem("speechRecognitionScore", 0);

    setFourPicsOneWord(0);
    setMemoryGame(0);
    setGuessThePicture(0);
    setWordle(0);
    setVocabQuiz(0);
    setSpeechRecognitionScore(0);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Typography variant="h3" gutterBottom align="center">
        ScoreBoard
      </Typography>

      <Grid container spacing={2}>
        {gameScores.map((game) => (
          <Grid item xs={12} sm={6} key={game.name}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {game.icon} {game.name}
                </Typography>
                <Typography variant="h4" color="primary">
                  {game.score}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ marginTop: 2, backgroundColor: "primary.main", color: "primary.contrastText" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <FaTrophy /> Total Score
          </Typography>
          <Typography variant="h3">{totalScore}</Typography>
        </CardContent>
      </Card>

      <button className="text-lg bg-red-600 rounded p-2 mt-4" onClick={resetScores}>
        Reset Scores
      </button>
    </Box>
  );
}
