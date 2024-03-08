import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-200 py-8 text-center">
      {/* Secondary CTAs */}
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Employer Signup</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Developer Signup</button>
      </div>
      {/* Navigation links */}
      <div className="mt-4">
        <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">About Us</a>
        <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Blog</a>
        <a href="#" className="text-gray-700 hover:text-blue-500 mx-2">Contact</a>
      </div>
      {/* Copyright */}
      <p className="mt-4 text-gray-600">© 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
