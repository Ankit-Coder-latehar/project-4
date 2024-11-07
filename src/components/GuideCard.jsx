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
      description: 'Ensure your loved ones future with a life insurance plan that grows with them. From coverage to peace of mind, we’re here to support your dreams and safeguard the people you care about most.',
      image: 'https://media.istockphoto.com/id/1290693328/photo/family-care-concept-hands-with-paper-silhouette-on-table.jpg?s=612x612&w=0&k=20&c=ndKmKJeFdkTjQ2ivwGp4-_y3W69MsmBeqMhGAdYC9O4='
    },
    { 
      title: 'Home Insurance', 
      description: 'Your home is more than a building; it’s a reflection of your dreams. Our home insurance plans are designed to give you the comfort of knowing that everything youve built is protected.',
      image: 'https://kumarinvestmentsolutions.com/wp-content/uploads/2021/04/What-are-the-main-benefits-of-taking-up-home-insurance-1-1.jpg'
    },
    { 
      title: 'Auto Insurance', 
      description: 'Wherever the road takes you, drive with the peace of mind that our auto insurance has you covered. From accidents to roadside assistance, we’re here to keep you moving forward.',
      image: 'https://media.istockphoto.com/id/1264403893/photo/concept-of-insurance-man-protective-and-car-family-health-insurance-policy-examining.jpg?s=612x612&w=0&k=20&c=uWAHnHBqar1YTJB0VzUY9EZ7jwXoZwGiDbawbrUwsKI='
    },
    { 
      title: 'Education Insurance', 
      description: 'Education is one of the greatest gifts you can give. Our education insurance helps you plan for your child’s future, ensuring that their dreams are within reach, no matter what.',
      image: 'https://www.enrizon.com/wp-content/uploads/2020/03/Learning-the-Importance-of-Education-Related-Insurance-Products.png'
    },
    { 
      title: 'Motor Bike Insurance', 
      description: 'From daily commutes to weekend adventures, our motorbike insurance provides the protection you need for every ride. Peace of mind, built for two wheels',
      image: 'https://www.bajajallianz.com/blog/wp-content/uploads/2021/04/motorcycle-insurance-online-buyers-guide.png'
    },
    { 
      title: 'Truck Insurance', 
      description: 'Protect your livelihood and every mile you drive with comprehensive truck insurance. From cargo to liability coverage, we ensure that your truck and business stay safe on the road.',
      image: 'https://www.fr8.in/blog/wp-content/uploads/2023/03/CTTI.png'
    },
    { 
      title: 'Land Insurance', 
      description: 'Whether it’s vacant property or development land, our land insurance provides essential coverage for your asset, safeguarding your investment from unexpected risks.',
      image: 'https://cdn.prod.website-files.com/61d8bd8e7dfa2dd9aba11ff0/635b9a09f911766a34dbe9cf_What%20do%20I%20Need%20to%20Know%20About%20Commercial%20Property%20Insurance.jpg'
    },
    { 
      title: 'Family Insurance', 
      description: 'From health to life insurance, our family plans ensure that everyone in your family is protected. Safeguard your loved ones with customized options that fit your family’s unique needs.',
      image: 'https://img.choice.com.au/-/media/e71ebf8ab10548de90c0bcd6e7eaf32d.ashx?w=660&jq=80%20660w'
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
         
          
        </div>
      </div>
    </div>
  );
};

export default InsuranceGuides;


