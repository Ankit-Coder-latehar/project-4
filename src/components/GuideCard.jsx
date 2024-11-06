import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const GuideCard = ({ title, description, isOpen, onClick }) => (
  <div 
    onClick={onClick} 
    className={`cursor-pointer bg-white shadow-md p-4 rounded-xl mb-4 ${isOpen ? 'text-black' : 'text-gray-500'}`}
  >
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg">{title}</h3>
      {isOpen ? <FiChevronUp /> : <FiChevronDown />}
    </div>
    {isOpen && <p className="mt-2 text-gray-600">{description}</p>}
  </div>
);

const InsuranceGuides = () => {
  const [openIndex, setOpenIndex] = useState(-1); // Set default to -1 for default image

  const guides = [
    { 
      title: 'Life Insurance', 
      description: 'Learn more about Life Insurance policies and benefits.',
      image: 'https://media.istockphoto.com/id/1290693328/photo/family-care-concept-hands-with-paper-silhouette-on-table.jpg?s=612x612&w=0&k=20&c=ndKmKJeFdkTjQ2ivwGp4-_y3W69MsmBeqMhGAdYC9O4='
    },
    { 
      title: 'Home Insurance', 
      description: 'Explore options to secure your home.',
      image: 'https://media.istockphoto.com/id/666996082/photo/insurance.jpg?s=612x612&w=0&k=20&c=SpxK_8UfGDxZ0pWJd_qfoD8oPFqRCOxE8alXYhMaFSA='
    },
    { 
      title: 'Auto Insurance', 
      description: 'Get the right coverage for your vehicle.',
      image: 'https://media.istockphoto.com/id/1264403893/photo/concept-of-insurance-man-protective-and-car-family-health-insurance-policy-examining.jpg?s=612x612&w=0&k=20&c=uWAHnHBqar1YTJB0VzUY9EZ7jwXoZwGiDbawbrUwsKI='
    },
    { 
      title: 'Education Insurance', 
      description: 'Plan for your child’s education.',
      image: 'https://www.enrizon.com/wp-content/uploads/2020/03/Learning-the-Importance-of-Education-Related-Insurance-Products.png'
    }
  ];

  // Default image when no guide is selected
  const defaultImage = 'https://img.freepik.com/free-photo/life-insurance-policy-terms-use-concept_53876-132761.jpg?semt=ais_hybrid';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Explore Our Guides</h1>
        <p className="text-gray-600">Our experts have compiled resources that cover the basics and beyond.</p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full lg:w-10/12">
        {/* Accordion Section */}
        <div className="bg-gray-100 p-6 rounded-xl w-full lg:w-1/3 h-full min-h-[400px]">
          {guides.map((guide, index) => (
            <GuideCard
              key={index}
              title={guide.title}
              description={guide.description}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Image and Button Section */}
        <div className="relative w-full lg:w-2/3">
          <img
            src={openIndex === -1 ? defaultImage : guides[openIndex].image} // Show default image when openIndex is -1
            alt="Guide"
            className="rounded-3xl shadow-lg w-full"
          />
          <div className="absolute top-4 right-4 bg-orange-500 p-2 rounded-xl">
            <div className="text-white text-sm flex items-center">
              Get Guidelines
              <span className="ml-2 text-xl">&#8594;</span>
            </div>
          </div>
          <button className="absolute bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceGuides;


