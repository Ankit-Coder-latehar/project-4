import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative w-full bg-gray-50 py-2 overflow-hidden mt-[-4]">
      {/* Main Heading */}
      <div className="text-center">
        <motion.h1
          className="text-9xl font-extrabold text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          THE SMARTER WAY TO <br /> BUY
          <motion.span
            className="relative text-teal-600 px-4 inline-block"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          >
            <motion.span
              className="absolute inset-0 bg-yellow-300 -z-10 rounded-md transform translate-y-1"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            INSURANCE
            {/* Money Image on the Right Side of the Span */}
            <motion.img
              src=""
              alt=""
              className="absolute top-0 right-0 h-12 w-auto transform translate-x-6 -translate-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            />
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
}

export default Hero;

