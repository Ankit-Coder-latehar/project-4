import React from 'react';

const SubscribeSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#FFFBEA] rounded-lg p-8 md:p-12 max-w-9xl mx-auto my-10 shadow-lg">
      {/* Image Section */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0">
        <img 
          src="/Screenshot 2024-11-05 151836.png" // Replace with your image URL
          alt="Subscribe" 
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      
      {/* Content Section */}
      <div className="md:w-full w-full md:pl-10 text-center md:text-left border rounded-2xl min-h-96  pt-90 mt-48 bg-[#FF7E36] ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and get the latest updates and offers directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
          />
          <button className="px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
