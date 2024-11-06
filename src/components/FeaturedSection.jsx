import React from "react";

const FeaturedSection = () => {
  return (
    <div className="flex items-center justify-between py-6 px-4 bg-gray-100">
      <p className="text-gray-800 text-lg font-semibold whitespace-nowrap">
        Featured By Company
      </p>
      <div className="flex space-x-12 opacity-70 items-center justify-center mr-20">
        <img
          src="/Screenshot 2024-11-05 154431.png"
          alt="Fast Company"
          className="h-10 w-auto"
        />
        <img
          src="/Screenshot 2024-11-05 154439.png"
          alt="The Wall Street Journal"
          className="h-10 w-auto"
        />
        <img
          src="/Screenshot 2024-11-05 154446.png"
          alt="USA Today"
          className="h-10 w-auto"
        />
      </div>
    </div>
  );
};

export default FeaturedSection;
