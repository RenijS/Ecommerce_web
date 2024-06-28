import React, { useEffect } from "react";

import "./CategoryCard.css";

const CategoryCard = ({ name, src }) => {
  useEffect(() => {
    //observer1 for category card
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer1.observe(element));

    // Cleanup observer on unmount
    return () => {
      hiddenElements.forEach((element) => observer1.unobserve(element));
    };
  }, []);

  return (
    <div className="category-card hidden">
      <div className="img-container">{<img src={src} alt={name} />}</div>
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
