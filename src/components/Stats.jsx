import React from 'react';

function Stats() {
  return (
    <section className="bg-[#207567] text-white p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
      {/* Left Text Section */}
      <div className="flex flex-col space-y-2 max-w-sm md:ml-20 text-center md:text-left">
        <h3 className="text-3xl md:text-5xl font-extrabold">Easy And Supporting</h3>
        <p className="text-lg md:text-xl font-semibold leading-relaxed">
          Policygenius provides free quotes tailored to your needs with support from licensed agents, helping you get insurance coverage.
        </p>
      </div>
      
      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12 items-center">
        {/* Stat Item 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-6xl font-extrabold text-yellow-300">30M+</h3>
          <p className="text-base md:text-lg font-semibold text-gray-200">Shoppers Served</p>
        </div>
        {/* Stat Item 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-6xl font-extrabold text-yellow-300">$90B</h3>
          <p className="text-base md:text-lg font-semibold text-gray-200">Life Insurance Sold</p>
        </div>
        {/* Stat Item 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-4xl md:text-6xl font-extrabold text-yellow-300">24/7</h3>
          <p className="text-base md:text-lg font-semibold text-gray-200">Help From Experts</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;

