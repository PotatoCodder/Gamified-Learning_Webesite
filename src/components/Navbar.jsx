import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-semibold">eLIT</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
