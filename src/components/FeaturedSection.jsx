import React from "react";

const FeaturedSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-4 px-6 md:py-6 bg-gray-100 space-y-4 md:space-y-0">
      {/* Featured Text */}
      <p className="text-gray-800 text-lg md:text-xl font-semibold text-center md:text-left whitespace-nowrap md:ml-10">
        Featured By Company
      </p>

      {/* Logos Section */}
      <div className="flex flex-wrap space-x-6 md:space-x-12 opacity-70 items-center justify-center md:justify-start">
        <img
          src="/Screenshot 2024-11-05 154431.png"
          alt="Fast Company"
          className="h-8 md:h-10 w-auto mb-4 md:mb-0"
        />
        <img
          src="/Screenshot 2024-11-05 154439.png"
          alt="The Wall Street Journal"
          className="h-8 md:h-10 w-auto mb-4 md:mb-0"
        />
        <img
          src="/Screenshot 2024-11-05 154446.png"
          alt="USA Today"
          className="h-8 md:h-10 w-auto mb-4 md:mb-0"
        />
      </div>
    </div>
  );
};

export default FeaturedSection;
