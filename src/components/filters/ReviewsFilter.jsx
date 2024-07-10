import React from "react";

const renderStars = (amount) => {
  return Array.from({ length: amount }).map((_, index) => (
    <span key={index}>⭐</span>
  ));
};

const ReviewsFilter = ({ isActive, selectedFilter, handleCheckboxChange }) => {
  return (
    <div
      className={`dropdown-content ${
        isActive ? "dropdown-content-active" : ""
      }`}
    >
      {[5, 4, 3, 2, 1].map((item, index) => {
        return (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => handleCheckboxChange(`${item} stars`)}
          >
            <input
              type="checkbox"
              checked={selectedFilter.includes(`${item} stars`)}
              onChange={() => {}}
            />
            <div>
              <span>{renderStars(item)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsFilter;
