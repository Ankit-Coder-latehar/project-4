import React from 'react';

const CustomerShowcase = () => {
  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-50">
      {/* Left half - Image */}
      <div className="flex flex-1 items-center justify-end bg-white">
        <img
          src="/Screenshot 2024-11-05 082748.png" // Replace with the actual path to your image
          alt="Customer Testimonial"
          className="max-w-[50%] h-auto object-cover"
        />
      </div>

      {/* Right half - Text */}
      <div className="flex flex-1 flex-col items-start justify-start p-10 bg-[#e9f5f5]">
        <h2 className="text-4xl font-bold mb-4">Discover Our Community of Satisfied Customers</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our customers have rated us highly across multiple platforms. See why they keep coming back to us!
        </p>
        <div className="bg-[#486856] p-8 rounded-lg mt-10 shadow-lg w-3/4 ml-8">
          <p className="text-white text-lg leading-relaxed">
            "The team at OurCompany went above and beyond. They not only provided great service but also tailored the
            package exactly to my needs. I now have a 15-year plan that fits my budget perfectly, and I couldn't be
            happier!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerShowcase;
