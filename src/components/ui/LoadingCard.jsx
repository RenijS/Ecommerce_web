import React from "react";

import "./LoadingCard.css";

const LoadingCard = () => {
  return (
    <div className="app__loading-card">
      <div>
        <div className="loader"></div>
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingCard;
