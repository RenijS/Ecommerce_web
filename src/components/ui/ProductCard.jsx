import React from "react";
import ImageComponent from "./ImageComponent";

import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { id, title, price, category, image, rating } = data;

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <NavLink to={`/product/${id}`} className="product-card" key={id}>
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
      <button onClick={() => handleAddToCart(data)}>Add to Cart</button>
    </NavLink>
  );
};

export default ProductCard;
