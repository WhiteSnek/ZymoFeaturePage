import React from 'react';
import Modal from 'react-modal';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const CarImageModal = ({ modalIsOpen, closeModal, additionalImages, currentImageIndex, setCurrentImageIndex }) => {
  const slideLeft = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + additionalImages.length) % additionalImages.length);
  };

  const slideRight = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % additionalImages.length);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
      overlayClassName="overlay"
      closeTimeoutMS={500} 
    >
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full mx-auto relative shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 text-white text-lg bg-gray-500/50 flex justify-center items-center p-2 aspect-square rounded-full hover:bg-gray-500"
          aria-label="Close Modal"
        >
          <CloseIcon />
        </button>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={additionalImages[currentImageIndex]}
              src={additionalImages[currentImageIndex]}
              alt="Additional Car Image"
              className="w-full h-auto object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute inset-y-1/2 left-0 flex items-center pl-2">
          <button
            onClick={slideLeft}
            className="text-white bg-gray-500/50 flex justify-center items-center aspect-square p-3 rounded-full hover:bg-gray-700 shadow-lg"
          >
            <ArrowBackIos />
          </button>
        </div>
        <div className="absolute inset-y-1/2 right-0 flex items-center pr-2">
          <button
            onClick={slideRight}
            className="text-white bg-gray-500/50 flex justify-center items-center aspect-square p-3 rounded-full hover:bg-gray-700 shadow-lg"
          >
            <ArrowForwardIos />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CarImageModal;
