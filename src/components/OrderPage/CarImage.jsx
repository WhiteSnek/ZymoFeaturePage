import React from "react";
import { motion } from "framer-motion"; 
const CarImage = ({ car, openModal }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-full p-4 lg:w-1/2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={car.img}
        alt={`${car.company} ${car.model}`}
        className="w-full object-cover cursor-pointer rounded-lg shadow-lg"
        onClick={() => openModal(0)}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CarImage;
