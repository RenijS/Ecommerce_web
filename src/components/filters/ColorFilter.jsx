import React from "react";

import "./ColorFilter.css";

const ColorFilter = ({ isActive, selectedFilter, handleCheckboxChange }) => {
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Pink",
    "Purple",
    "Orange",
    "Brown",
  ];

  return (
    <div
      className={`dropdown-content colors-content ${
        isActive ? "dropdown-content-active" : ""
      }`}
    >
      {colors.map((color, index) => (
        <div className="flex-x" style={{ gap: "1rem" }} key={index}>
          <input
            type="checkbox"
            value={color}
            onChange={() => handleCheckboxChange(color)}
            checked={selectedFilter.includes(color)}
          />
          <div className="y-central" style={{ gap: "0.5rem" }}>
            <div className="color-box" style={{ backgroundColor: color }} />
            <p>{color}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorFilter;
