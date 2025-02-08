/* eslint-disable no-unused-vars */
import "@babel/polyfill";
import Navbar from './components/Navbar';
import React from 'react';
import Wordle from './components/Wordle';
import Hero from './components/Hero';
import ImageBoxes from './components/ImagesBox';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import VocabularyMemoryGame from './components/VocabularyMemoryGame';
import VocabularyQuiz from './components/VocabularyQuiz';
import NextPassage from './components/NextPassage';
import SpeechRecognition from './components/SpeechRecognition';
import FourpicsOneword from './components/FourpicsOneword';
import Footer from './components/Footer';
import GuessThePicture from './components/GuessThePicture';

const AppContent = () => {
  const location = useLocation();

  localStorage.setItem('fourPicOneWordScore', 0);
  localStorage.setItem('wordleScore', 0);
  localStorage.setItem('guessGameScore', 0);
  localStorage.setItem('memoryGameScore', 0);
  return (
    <div>
      <Navbar />
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/" element={<ImageBoxes />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/memory" element={<VocabularyMemoryGame />} />
        <Route path="/vocab-quiz" element={<VocabularyQuiz />} />
        <Route path="/next-passage" element={<NextPassage />} />
        <Route path='/speech-recognition' element={<SpeechRecognition />} />
        <Route path='/guess-picture' element={<GuessThePicture />} />
        <Route path='/four-pics' element={<FourpicsOneword />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
