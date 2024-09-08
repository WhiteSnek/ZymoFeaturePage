import React, { useEffect, useState } from 'react';
import Card from '../components/Card'; 
import FilterModal from '../components/FilterModal'; 
import { useFirebase } from '../providers/FirebaseProvider';
import CircularProgress from '@mui/material/CircularProgress';

const categories = ['sedan', 'suv', 'hatchback', 'sports', 'luxury'];

const RentCar = () => {
  const [cars, setCars] = useState([]);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [loading, setLoading] = useState(true); 

  const { getAllCars } = useFirebase();

  useEffect(() => {
    getAllCars().then((cars) => {
      setCars(cars);
      setLoading(false); 
    });
  }, [getAllCars]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const resetFilter = () => {
    setSearchTerm('');
    setSelectedCategory([]);
    setPriceRange([0, 200]);
  };

  const filteredCars = cars
    .filter((car) =>
      car.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((car) =>
      selectedCategory.length === 0 || selectedCategory.includes(car.category.toLowerCase())
    )
    .filter((car) =>
      car.rent >= priceRange[0] && car.rent <= priceRange[1]
    );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col p-6">
      <h1 className="text-4xl font-bold mb-8">Rent a Car</h1>

      <div className="mb-8 flex flex-col gap-4 md:flex-row md:gap-6 items-center">
        <input
          type="text"
          placeholder="Search by company or model"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
        />

        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="p-2 border border-gray-300 rounded-md bg-violet-600 text-white hover:bg-violet-500 transition-colors duration-200 w-full md:w-1/3 text-center"
        >
          Open Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCars.map((car) => (
          <Card car={car} key={car.id} />
        ))}
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        resetFilter={resetFilter}
      />
    </div>
  );
};

export default RentCar;
