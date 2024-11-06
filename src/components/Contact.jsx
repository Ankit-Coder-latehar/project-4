// src/components/ContactForm.js
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <div className="flex flex-col md:flex-row bg-gray-900 shadow-lg rounded-lg p-10 md:w-3/4 lg:w-2/3 w-full space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-4 font-semibold">Contact Us</button>
          <h2 className="text-4xl font-bold mb-2">Let’s Get In Touch.</h2>
          <p className="text-gray-400 mb-4">
            Or just reach out manually to <a href="mailto:hello@slothui.com" className="text-blue-400 hover:underline">prakul.sk55@gmail.com</a>.
          </p>
          {/* Add phone section */}
          <div className="flex items-center text-gray-400">
            <FaPhone className="text-gray-400 mr-2" />
            <span className="ml-2">+91-9643474388</span>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-500 mb-1">Full Name</label>
              <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800">
                <FaUser className="text-gray-400 mx-2" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name..."
                  className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-r-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Email Address</label>
              <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800">
                <FaEnvelope className="text-gray-400 mx-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address..."
                  className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-r-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Phone Number</label>
              <div className="flex items-center border border-gray-600 rounded-lg bg-gray-800">
                <FaPhone className="text-gray-400 mx-2" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+44 (000) 000-0000"
                  className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none rounded-r-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-500 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your main text here..."
                className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none"
                rows="4"
              ></textarea>
              <div className="text-gray-500 text-sm text-right mt-1">300/300</div>
            </div>
           
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-blue-600 transition duration-300"
            >
              <FaPaperPlane className="mr-2" /> Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
