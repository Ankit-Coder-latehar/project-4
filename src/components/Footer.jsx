import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Information Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">
              Cashback <br /> Assured
            </h2>
            <p className="text-gray-400 mb-4">All Types of Insurance</p>
            <p className="text-gray-400">
            Cashback Assured Insurance offers innovative coverage with cashback rewards for both individuals and businesses. Trust us for a smarter, more rewarding insurance experience.
            </p>
          </div>
          
          {/* Services Section (Centered) */}
          <div className="lg:col-span-2 text-center">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href='/direct-tax-services' className="hover:text-[#F37920]">Truck Insurance</a></li>
              <li><a href='/indirect-tax-services' className="hover:text-[#F37920]">Car Insurance</a></li>
              <li><a href='/auditing-and-assurance-service' className="hover:text-[#F37920]">Health Insurance</a></li>
              <li><a href='/corporate-and-LLP-Laws' className="hover:text-[#F37920]">Motor Bikes Insurance</a></li>
              <li><a href='/corporate-and-LLP-Laws' className="hover:text-[#F37920]">Land Insurance</a></li>
              <li><a href='/corporate-and-LLP-Laws' className="hover:text-[#F37920]">Travel Insurance</a></li>
              <li><a href='/corporate-and-LLP-Laws' className="hover:text-[#F37920]">Family Insurance</a></li>
            </ul>
          </div>

          {/* Contact Section (Right Side) */}
          <div className="lg:col-span-1 lg:text-left">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">
                  Address: H/No. - 472, <br /> Sector 6, Gurugram - 122001, <br /> Haryana
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">+91-9643474388</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">prakul.sk55@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">Cashback Assured</span>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="mt-12 text-center text-gray-400 border-t border-gray-700 pt-6">
          <p>Copyright © 2024 Cashback Assured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

