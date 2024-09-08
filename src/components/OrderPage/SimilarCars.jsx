import React from 'react'

const SimilarCars = ({ similarCars }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Similar Cars</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {similarCars.map((similarCar, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          >
            <img
              src={similarCar.img}
              alt={`${similarCar.company} ${similarCar.model}`}
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {similarCar.company} {similarCar.model}
              </h3>
              <p className="text-gray-600">₹20/hr</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarCars;
