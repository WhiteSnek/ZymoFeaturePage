import React from 'react';
import { motion } from 'framer-motion'; 

const CarDetails = ({ car }) => {
  return (
    <motion.div 
      className="p-6 lg:w-1/2 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {car.company} {car.model}
      </motion.h1>

      <p className="text-gray-600 mb-2">
        Year: <span className="font-semibold">{car.year}</span>
      </p>
      <p className="text-gray-600 mb-6">
        Rent: <span className="font-bold text-black text-3xl">₹{car.rent}/hr</span>
      </p>

      <motion.button
        className="w-1/2 bg-purple-600 text-white py-3 rounded-md font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Rent Now
      </motion.button>
  
      <section className="my-8">
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Car Specifications
        </motion.h2>
        <ul className="space-y-2">
          {Object.entries(car.specs).map(([key, value], index) => (
            <motion.li 
              key={index} 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span className="font-semibold">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          Rental Policies
        </motion.h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {car.rentalPolicies.map((policy, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {policy}
            </motion.li>
          ))}
        </ul>
      </section>

      <section className="my-8">
        <motion.h2 
          className="text-2xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          Additional Features
        </motion.h2>
        <div className="space-y-2">
          {car.features.map((feature, index) => (
            <motion.p 
              key={index} 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
            >
              {feature}
            </motion.p>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default CarDetails;
