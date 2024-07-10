import React from "react";
import ImageComponent from "./ImageComponent";

import "./ProductCard.css";

const ProductCard = ({ data, index }) => {
  const { id, title, price, category, description, image, rating } = data;
  return (
    <div className="product-card">
      <ImageComponent
        src={image}
        desc={title}
        hash={"LILzjM58Xoa$#ix^o#M|*0?bx[t7"}
      />
      <div className="product-details">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 className="single-line-text">{title}</h4>
          <h4 style={{ marginLeft: "1.5rem" }}>${price}</h4>
        </div>
        <span className="sub-text">{category}</span>
        <div>
          Rating: {rating.rate} by {rating.count}
        </div>
      </div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
