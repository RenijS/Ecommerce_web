import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "../../../components/ui/ImageComponent";

import "./Cart.css";
import {
  addItem,
  removeAllItem,
  removeItem,
} from "../../../redux/slices/cartSlice";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleDelete = (item) => {
    dispatch(removeAllItem({ id: item.id }));
  };

  const handleIncreaseAmount = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseAmount = (item) => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <div className="app__cart-page">
      <h2>Shopping Cart</h2>
      <div className="horizontal-line" />
      <div className="cart">
        <section className="checkout-section">
          <h3>{`Subtotal (${totalQuantity} items): $${
            totalAmount <= 0 ? 0 : totalAmount.toFixed(2)
          }`}</h3>
          {totalAmount !== 0 && totalQuantity !== 0 && (
            <NavLink to={"/checkout"}>
              <button className="proceed-checkout-btn">
                Proceed to Checkout
              </button>
            </NavLink>
          )}
        </section>
        <section className="cart-list">
          {items.map((item) => (
            <div className="cart-item flex-x">
              <ImageComponent
                src={item.image}
                desc={item.title}
                hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
              />
              <div className="item-info">
                <div className="flex-y" style={{ gap: "0.2rem" }}>
                  <div
                    className="flex-x"
                    style={{ justifyContent: "space-between" }}
                  >
                    <h3 className="title">{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                  <p className="sub-text">{item.category}</p>
                  <p className="desc sub-text">{item.description}</p>
                </div>
                <div className="flex-x">
                  <div className="amount-btn">
                    <button
                      onClick={() => {
                        handleDecreaseAmount(item);
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreaseAmount(item)}>
                      +
                    </button>
                  </div>
                  <span
                    className="delete-btn"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Cart;
