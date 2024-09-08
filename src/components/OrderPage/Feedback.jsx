import React from "react";

const Feedback = ({ feedback }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 transition-colors duration-300 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.43 8.212 1.191-5.933 5.787 1.4 8.166L12 17.8l-7.347 3.874 1.4-8.166-5.933-5.787 8.212-1.191L12 .587z" />
      </svg>
    ));
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback</h2>
      <div className="space-y-6">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="p-5 border border-gray-300 rounded-lg bg-gray-50 shadow-sm transition-transform transform hover:scale-[1.01] duration-300"
          >
            <p className="font-semibold text-lg text-gray-800 mb-2">
              {item.user}
            </p>
            <div className="flex space-x-1 mb-3">
              {renderStars(item.rating)}
            </div>
            <p className="text-gray-600">{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedback;
