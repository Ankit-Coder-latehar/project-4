import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const FAQ = () => {
  return (
    <div className="flex flex-col items-start min-h-32 bg-[#FFFBEA] p-8 bg-pattern bg-cover bg-center relative">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 w-full text-left">Frequently Asked Questions</h1>
      
      <div className="w-full max-w-2xl ml-auto p-6 rounded-lg shadow-lg bg-white bg-opacity-90 space-y-4 backdrop-blur-sm">
        <FAQItem question="What is your return policy?">
          You can return any item within 30 days of purchase if it's in its original condition.
        </FAQItem>

        <FAQItem question="How do I track my order?">
          Once your order ships, you’ll receive an email with a tracking link. You can also log into your account to view your order status.
        </FAQItem>

        <FAQItem question="Can I purchase items internationally?">
          Yes, we ship worldwide! International shipping rates may apply.
        </FAQItem>
      </div>
    </div>
  );
};

const FAQItem = ({ question, children }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-6 py-3 text-lg font-medium text-left text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
            <span>{question}</span>
            <ChevronUpIcon
              className={`${
                open ? 'transform rotate-180' : ''
              } w-5 h-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-6 pt-4 pb-2 text-gray-600">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default FAQ;
