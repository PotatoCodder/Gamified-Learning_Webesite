import Navbar from './components/Navbar'
import React from 'react'
import Wordle from './components/Wordle'
import Hero from './components/Hero'
import ImageBoxes from './components/ImagesBox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<ImageBoxes />} />
          <Route path="/wordle" element={<Wordle />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
