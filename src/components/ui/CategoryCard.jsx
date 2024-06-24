import React from "react";

import "./CategoryCard.css";

const CategoryCard = ({ name, src }) => {
  return (
    <div className="category-card hidden">
      <div className="img-container">{<img src={src} alt={name} />}</div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
