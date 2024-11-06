import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              T R J & <br/>Associates
            </h2>
            <p className="text-gray-400">Chartered Accountants</p>
            <p className="mt-4 text-gray-400">
              T R J & Associates is amongst the experienced Chartered Accountancy firms. The firm offers full suite business service solutions to our domestic and international clients.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="text-gray-400">
              <a href='/direct-tax-services'><li className="mb-2 hover:text-[#F37920]">Direct Tax Services</li></a>
              <a href='/indirect-tax-services'><li className="mb-2 hover:text-[#F37920]">Indirect Tax</li></a>
              <a href='/auditing-and-assurance-service'><li className="mb-2 hover:text-[#F37920]">Auditing and Assurance Services</li></a>
              <a href='/corporate-and-LLP-Laws'><li className="mb-2 hover:text-[#F37920]">Corporate and LLP Laws</li></a>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">TERMS</h3>
            <ul className="text-gray-400">
              <a href='/privacypolicy'><li className="mb-2 hover:text-[#F37920]">Privacy Policy</li></a>
              <a href='/terms-condition'><li className='hover:text-[#F37920]'>Terms and Conditions</li></a>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <ul className="text-gray-400">
              <li className="mb-2 flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">
                  Address: Unit no 201, <br/>Pyramid House 
                  NH-08,<br/> Sector 33, Gurugram - 122001 <br />
                  Haryana
                </span>
              </li>
              <li className="mb-2 flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">+91-8447484647, +91-9560153500</span>
              </li>
              <li className="mb-2 flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">info@trjassociates.in</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-4 text-yellow-500">&#8226;</span> 
                <span className="ml-2">TRJ Associates</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="mt-10 text-center text-gray-400">
          <p>Copyright © 2024 TRJ & Associates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
