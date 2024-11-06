import React from 'react';

function Stats() {
  return (
    <section className="bg-[#207567] text-white p-10 rounded-lg flex justify-between items-center">
      {/* Left Text Section */}
      <div className="flex flex-col space-y-2 max-w-sm">
        <h3 className="text-5xl font-extrabold">Easy And Supporting</h3>
        <p className="text-xl font-semibold leading-relaxed">
          Policygenius provides free quotes tailored to your needs with support from licensed agents, helping you get insurance coverage.
        </p>
      </div>
      
      {/* Stats Section */}
      <div className="flex space-x-12">
        {/* Stat Item 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-6xl font-extrabold text-yellow-300">30M+</h3>
          <p className="text-lg font-semibold text-gray-200">Shoppers Served</p>
        </div>
        {/* Stat Item 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-6xl font-extrabold text-yellow-300">$90B</h3>
          <p className="text-lg font-semibold text-gray-200">Life Insurance Sold</p>
        </div>
        {/* Stat Item 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-6xl font-extrabold text-yellow-300">24/7</h3>
          <p className="text-lg font-semibold text-gray-200">Help From Experts</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
