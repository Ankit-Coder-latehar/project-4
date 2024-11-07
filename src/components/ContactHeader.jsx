import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function ContentHeader() {
  return (
    <header className="flex justify-between items-center p-2 bg-gray-100">
      <div className="flex items-center space-x-4">
        <img src="/Screenshot 2024-11-07 183817.png" alt="Qikbuk Logo" className="h-12" />
      </div>
      <nav className="flex space-x-6 text-center">
        {/* Adding email and phone icons */}
        <div className="flex items-center space-x-4 text-gray-600 hidden md:flex">
          <a href="mailto:info@qikbuk.com" className="flex items-center hover:text-gray-900">
            <FaEnvelope className="mr-2" /> 
            prakul.sk55@gmail.com
          </a>
          <a href="tel:+1234567890" className="flex items-center hover:text-gray-900">
            <FaPhone className="mr-2" /> +91-9643474388
          </a>
        </div>
      </nav>
      <a href="/">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Home</button>
      </a>
    </header>
  );
}

export default ContentHeader;