import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-gray-900">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
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
