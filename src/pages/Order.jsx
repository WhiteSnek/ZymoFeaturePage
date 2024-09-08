import React, { useEffect, useState } from 'react';
import { CarImage, CarDetails, CarImageModal, FAQ, Feedback,SimilarCars } from '../components/OrderPage';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useFirebase } from '../providers/FirebaseProvider';

const Order = () => {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [car, setCar] = useState(null);
  const { getOneCar } = useFirebase();

  useEffect(() => {
    getOneCar(id-1).then((car) => {
      setCar(car);
      console.log(car);
    });
  }, [id, getOneCar]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (!car) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row border border-gray-200">
        <CarImage car={car} openModal={openModal} />

        <CarDetails car={car} />
      </div>

      <div className="mt-8 max-w-7xl mx-auto bg-white rounded-lg p-6 border border-gray-200">
        <Feedback feedback={car.feedback} />

        <FAQ faqs={car.faqs} />


        <SimilarCars similarCars={car.similarCars} />
      </div>

      <CarImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        additionalImages={car.additionalImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </div>
  );
};

export default Order;
