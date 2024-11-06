import React from 'react';

const TrustSection = () => {
  return (
    <div className="bg-gray-50 p-8 md:p-12 flex flex-col md:flex-row items-start space-y-8 md:space-y-0">
      {/* Left Side with Image */}
      <div className="flex-1 space-y-6">
        <div className="relative">
          <div className="absolute top-8 left-6 rounded-lg w-full h-full -z-10"></div>
          <img
            src="/Screenshot 2024-11-05 074656.png" // Replace with the actual path to your image
            alt="People discussing documents"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side with Header and Features */}
      <div className="flex-1 space-y-6">
        {/* Title aligned on the right, just above the features */}
        <h2 className="text-4xl font-bold text-gray-800 text-center">Why Trust Our Service?</h2>
        
        {/* Features Grid aligned on the left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 md:mt-0">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 text-orange-600 font-bold p-2 rounded-full">01</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Smart tools</h3>
              <p className="text-gray-600">
                Our proprietary technology makes it easy to compare personalized quotes and policies from top-rated insurers side by side.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 text-orange-600 font-bold p-2 rounded-full">02</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Human Support</h3>
              <p className="text-gray-600">
                Our team of licensed experts is here to answer questions, handle paperwork, and help you make decisions with confidence.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 text-orange-600 font-bold p-2 rounded-full">03</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Fully independent</h3>
              <p className="text-gray-600">
                From exploring coverage options to making policy adjustments as your life changes, we’re your advocate at every step.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start space-x-4">
            <div className="bg-orange-100 text-orange-600 font-bold p-2 rounded-full">04</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Security you can trust</h3>
              <p className="text-gray-600">
                Your security is our priority. We use industry-leading security practices to help keep your information safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;

