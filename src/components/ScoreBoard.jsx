/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { FaTrophy, FaBrain, FaImage, FaFont, FaBook, FaMicrophone } from "react-icons/fa";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function ScoreBoard() {
  const [scores, setScores] = useState({
    memoryGame: 0,
    guessThePicture: 0,
    wordle: 0,
    vocabquiz: 0,
    speechRecognitionScore: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScores({
        memoryGame: parseInt(localStorage.getItem("memoryGameScore")) || 0,
        guessThePicture: parseInt(localStorage.getItem("guessGameScore")) || 0,
        wordle: parseInt(localStorage.getItem("wordleScore")) || 0,
        vocabquiz: parseInt(localStorage.getItem("vocabQuizScore")) || 0,
        speechRecognitionScore: parseInt(localStorage.getItem("speechRecognitionScore")) || 0,
      });
    }
  }, []);

  const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);

  const gameScores = [
    { name: "Memory Game", score: scores.memoryGame, icon: <FaBrain /> },
    { name: "Guess The Picture", score: scores.guessThePicture, icon: <FaImage /> },
    { name: "Wordle", score: scores.wordle, icon: <FaFont /> },
    { name: "Vocabulary Quiz", score: scores.vocabquiz, icon: <FaBook /> },
    { name: "Speech Recognition", score: scores.speechRecognitionScore, icon: <FaMicrophone /> },  ];

  const resetScores = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("memoryGameScore", 0);
      localStorage.setItem("guessGameScore", 0);
      localStorage.setItem("wordleScore", 0);
      localStorage.setItem("vocabQuizScore", 0);
      localStorage.setItem("speechRecognitionScore", 0);

      setScores({
        memoryGame: 0,
        guessThePicture: 0,
        wordle: 0,
        vocabquiz: 0,
        speechRecognitionScore: 0,
      });
    }
  };

  const generatePDF = () => {
    const input = document.getElementById("scoreboard");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("scoreboard.pdf");
    });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <div id="scoreboard">
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
      </div>

      <button className="text-lg bg-red-600 rounded p-2 mt-4" onClick={resetScores}>
        Reset Scores
      </button>
      <button className="text-lg bg-blue-600 rounded p-2 mt-4 ml-2" onClick={generatePDF}>
        Download PDF
      </button>
    </Box>
  );
}
