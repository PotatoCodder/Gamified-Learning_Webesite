import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">eLIT</h3>
            <p className="text-sm">Empowering education through interactive experiences.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Courses</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400"><FaFacebookF /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedinIn /></a>
              <a href="mailto:info@gamifiedlearning.com" className="text-2xl hover:text-blue-400"><MdEmail /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gamified Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
