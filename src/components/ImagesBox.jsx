import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay } from 'react-icons/fa'

export default function ImagesBox() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-3xl p-8 bg-white shadow-2xl rounded-xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Vocabulary Games
        </h1>
        <div className="flex justify-center">
          <GameCard 
            title="Word Play"
            description="Enhance your vocabulary with fun word association games!"
            icon={<FaPlay className="text-4xl text-purple-500" />}
            link="/guesspicture"
          />
        </div>
      </div>
    </div>
  )
}

function GameCard({ title, description, icon, link }) {
  return (
    <div className="w-full max-w-sm p-6 transition-all duration-300 rounded-lg shadow-md bg-gray-50 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-center mb-4">
        {icon}
        <h2 className="ml-4 text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      <p className="mb-6 text-center text-gray-600">{description}</p>
      <div className="text-center">
        <Link 
          to={link} 
          className="inline-block px-6 py-2 font-bold text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105"
        >
          Play Now
        </Link>
      </div>
    </div>
  )
}
