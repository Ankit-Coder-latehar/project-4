import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white">
      <div className="flex items-center space-x-4">
        <img src="logo.png" alt="Qikbuk Logo" className="h-8" />
      </div>
      <nav className="flex space-x-6 text-center">
        <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </nav>
      <button className="bg-orange-500 text-white px-4 py-2 rounded">Contact Us</button>
    </header>
  );
}

export default Header;

