import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ car }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 ease-in-out">
      <img
        src={car.img}
        alt={`${car.company} ${car.model}`}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {car.company} {car.model}
        </h2>
        <p className="text-gray-600 mb-1">
          Year: <span className="font-medium">{car.year}</span>
        </p>
        <p className="text-gray-600 mb-1">
          Category: <span className="font-medium capitalize">{car.category}</span>
        </p>
        <p className="text-gray-600 mb-4">
          Rent: <span className="font-medium">₹{car.rent}/hr</span>
        </p>
        
        <Link to={`/car/${car.id}`} className="block">
          <button className="w-full bg-violet-600 text-white py-2 rounded-md font-semibold hover:bg-violet-500 transition-colors duration-200">
            Rent Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
