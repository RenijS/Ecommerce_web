import React, { useEffect } from "react";
import ImageComponent from "../../../components/ui/ImageComponent";

import "./ProductView.css";

import productsArr from "../../../data/example-data.json";

import { GrSecure } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";
import Carousel from "../../../components/ui/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../../redux/slices/productSlice";
import { useParams } from "react-router-dom";
import { addItem } from "../../../redux/slices/cartSlice";
import LoadingCard from "../../../components/ui/LoadingCard";

const ProductView = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  if (loading) {
    return <LoadingCard />; // You can replace this with a loader component if you have one
  }

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  return (
    <div className="app__product-view">
      <div className="product-view">
        <p className="sub-text">{product.category.toUpperCase()}</p>
        <div className="product">
          <ImageComponent
            src={product.image}
            desc={product.title}
            hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
          />
          <div className="right-col">
            <section className="upper">
              <h1>{product.title}</h1>
              <p className="sub-text">{product.description}</p>
              <div>
                {product.rating.rate}⭐ by {product.rating.count} customers
              </div>
            </section>
            <div className="horizontal-line" />
            <section className="payment-info">
              <h3>${product.price}</h3>
              <p className="sub-text">
                Suggested payments with 6 months special financing
              </p>
            </section>
            <div className="horizontal-line" />
            <section className="buttons">
              <div className="other-btns">
                <button>Buy Now</button>
                <button
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add to Cart
                </button>
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
