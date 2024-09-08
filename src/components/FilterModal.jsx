import React from 'react';
import Modal from 'react-modal';
import { Slider } from '@mui/material'; 
import CloseIcon from '@mui/icons-material/Close';
const FilterModal = ({
  isOpen,
  onClose,
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  resetFilter
}) => {
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategory((prev) =>
      checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-8"
      ariaHideApp={false}
    >
      <div className="bg-white rounded-lg overflow-hidden max-w-lg mx-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close Modal"
        >
          <CloseIcon />
        </button>
        <h2 className="text-2xl font-bold mb-4">Filter Cars</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          {categories.map((category) => (
            <div key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={category}
                id={`category-${category}`}
                checked={selectedCategory.includes(category)}
                onChange={handleCategoryChange}
                className="mr-2"
              />
              <label htmlFor={`category-${category}`} className="text-gray-700">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <Slider
            value={priceRange}
            onChange={(_, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={200}
            step={1}
            aria-labelledby="range-slider"
            className="mb-4"
          />
          <div className="flex justify-between text-gray-600">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={resetFilter}
            className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            Clear Filters
          </button>
          <button
            onClick={onClose}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors duration-200"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default FilterModal;
