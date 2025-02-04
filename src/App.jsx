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

const AppContent = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {location.pathname === '/' && <Hero />}
      <Routes>
        <Route path="/" element={<ImageBoxes />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/memory-game" element={<VocabularyMemoryGame />} />
        <Route path="/vocab-quiz" element={<VocabularyQuiz />} />
        <Route path="/next-passage" element={<NextPassage />} />
        <Route path='/speech-recognition' element={<SpeechRecognition />} />
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
