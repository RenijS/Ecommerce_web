import React from "react";
import ImageComponent from "../../../components/ui/ImageComponent";

import chairsImg from "../../../assets/images/chairs.jpg";

import "./ProductView.css";

import productsArr from "../../../data/example-data.json";

import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import Carousel from "../../../components/ui/Carousel";

const ProductView = () => {
  return (
    <div className="app__product-view">
      <div className="product-view">
        <p className="sub-text">Item's category</p>
        <div className="product">
          <ImageComponent
            src={chairsImg}
            desc={""}
            hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
          />
          <div className="right-col">
            <section className="upper">
              <h1>Product Name</h1>
              <p className="sub-text">Product description</p>
              <div>Product rating</div>
            </section>
            <div className="horizontal-line" />
            <section className="payment-info">
              <p>Payment amounts</p>
              <p className="sub-text">
                Suggested payments with 6 months special financing
              </p>
            </section>
            <div className="horizontal-line" />
            <section className="buttons">
              <div className="amount-btn">
                <button>-</button>
                <span>10</span>
                <button>+</button>
              </div>
              <div className="other-btns">
                <button>Buy Now</button>
                <button>Add to Cart</button>
              </div>
            </section>
            <div className="horizontal-line" />
            <section className="extra-benefits">
              <div className="y-central" style={{ gap: "1.5rem" }}>
                <GrSecure />{" "}
                <div className="flex-y">
                  <h4>Secure transaction</h4>
                  <span className="sub-text">Your transaction is secure.</span>
                </div>
              </div>
              <div className="y-central" style={{ gap: "1.5rem" }}>
                <TbTruckDelivery />{" "}
                <div className="flex-y">
                  <h4>Free Delivery</h4>
                  <span className="sub-text">
                    Enter your postal code for delivery availablity.
                  </span>
                </div>
              </div>
              <div className="y-central" style={{ gap: "1.5rem" }}>
                <GiReturnArrow />{" "}
                <div className="flex-y">
                  <h4>Return Policy</h4>
                  <span className="sub-text">
                    Enter your postal code for delivery availablity.
                  </span>
                </div>
              </div>
              <div className="y-central" style={{ gap: "1.5rem" }}>
                <SiFsecure />{" "}
                <div className="flex-y">
                  <h4>Product warranty</h4>
                  <span className="sub-text">
                    Enter your postal code for delivery availablity.
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="horizontal-line" />
      <div className="related-products">
        <h2>Products related to this item</h2>
        <Carousel arrayData={productsArr} />
      </div>
    </div>
  );
};

export default ProductView;
