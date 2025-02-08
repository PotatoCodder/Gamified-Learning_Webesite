import React from 'react';
import { Box, Card, CardContent, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { FaTrophy, FaBrain, FaImage, FaFont, FaBook, FaMicrophone } from 'react-icons/fa';
import { GiPuzzle } from 'react-icons/gi';
import { MdRefresh } from 'react-icons/md';

export default function ScoreBoard() {
  const fourPicsOneWord = localStorage.getItem('fourPicOneWordScore');
  const memoryGame = localStorage.getItem('memoryGameScore');
  const guessThePicture = localStorage.getItem('guessGameScore');
  const wordle = localStorage.getItem('wordleScore');
  const vocabquiz = localStorage.getItem('vocabQuizScore');
  const speechRecognitionMistakes = JSON.parse(localStorage.getItem('speechRecognitionMistakes'));
  const speechRecognitionScore = localStorage.getItem('speechRecognitionScore');

  const totalScore = parseInt(fourPicsOneWord) + parseInt(memoryGame) + parseInt(guessThePicture) + 
                     parseInt(wordle) + parseInt(vocabquiz) + parseInt(speechRecognitionScore);

  const gameScores = [
    { name: 'Four Pics One Word', score: fourPicsOneWord, icon: <GiPuzzle /> },
    { name: 'Memory Game', score: memoryGame, icon: <FaBrain /> },
    { name: 'Guess The Picture', score: guessThePicture, icon: <FaImage /> },
    { name: 'Wordle', score: wordle, icon: <FaFont /> },
    { name: 'Vocabulary Quiz', score: vocabquiz, icon: <FaBook /> },
    { name: 'Speech Recognition', score: speechRecognitionScore, icon: <FaMicrophone /> },
  ];

  const resetScores = () => {
    localStorage.setItem('fourPicOneWordScore', 0);
    localStorage.setItem('wordleScore', 0);
    localStorage.setItem('guessGameScore', 0);
    localStorage.setItem('memoryGameScore', 0);
    localStorage.setItem('vocabQuizScore', 0);
    localStorage.setItem('speechRecognitionScore', 0);
    window.location.reload();
  }

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
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

      {speechRecognitionMistakes && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Speech Recognition Mistakes
            </Typography>
            <List dense>
              {Object.entries(speechRecognitionMistakes).map(([key, value]) => (
                <ListItem key={key}>
                  <ListItemIcon>
                    <FaMicrophone />
                  </ListItemIcon>
                  <ListItemText primary={`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      <Card sx={{ marginTop: 2, backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            <FaTrophy /> Total Score
          </Typography>
          <Typography variant="h3">
            {totalScore}
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<MdRefresh />}
          onClick={resetScores}
          sx={{
            fontSize: '1.1rem',
            padding: '10px 20px',
            borderRadius: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Reset Scores
        </Button>
      </Box>
    </Box>
  );
}
