/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h3 className="mb-2 text-xl font-bold">eLIT</h3>
            <p className="text-sm">Empowering education through interactive experiences.</p>
          </div>
          <div className="w-full mb-6 md:w-1/3 md:mb-0">
            <h4 className="mb-2 text-lg font-semibold">Quick Links</h4>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Courses</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="mb-2 text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400"><FaFacebookF /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedinIn /></a>
              <a href="mailto:info@gamifiedlearning.com" className="text-2xl hover:text-blue-400"><MdEmail /></a>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-8 text-sm text-center border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Gamified Learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
