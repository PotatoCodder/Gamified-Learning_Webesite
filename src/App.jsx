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
import Footer from './components/Footer';
import GuessThePicture from './components/GuessThePicture';
import ScoreBoard from './components/ScoreBoard'
import QuizForm from './components/QuizForm';

const AppContent = () => {
  const location = useLocation();

  console.log(localStorage);


  return (
    <div>
      <Navbar />
      {location.pathname === '/' && <Hero />}
      {location.pathname === '/' && <ScoreBoard />}
      <Routes>
        <Route path="/" element={<ImageBoxes />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/memory" element={<VocabularyMemoryGame />} />
        <Route path="/vocabquiz" element={<VocabularyQuiz />} />
        <Route path="/passage" element={<NextPassage />} />
        <Route path='/speechrecognition' element={<SpeechRecognition />} />
        <Route path='/guesspicture' element={<GuessThePicture />} />
        <Route path='/quiz-form' element={<QuizForm />} />
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
