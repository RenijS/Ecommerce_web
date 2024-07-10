import React, { useState } from "react";

import "./Checkout.css";
import ImageComponent from "../../../components/ui/ImageComponent";

const OrderAccepted = () => {
  return (
    <div className="accepted-msg">
      <div>Tick image animation</div>
      <h1>Thank you for the order</h1>
      <p>Your order has been accepted</p>
    </div>
  );
};

const Checkout = () => {
  const [paymentOption, setPaymentOption] = useState("");

  return (
    <div className="app__checkout">
      <p className="sub-text">Checkout</p>
      <div className="checkout-grid">
        <div className="product-info grid-item">
          <h1>Review Item And Shipping</h1>
          <div className="flex-x">
            <div className="flex-x">
              <ImageComponent src={""} desc={""} hash={""} />
              <div className="flex-y">
                <h2>Product Name</h2>
                <p className="sub-text">Color</p>
              </div>
            </div>
            <div className="flex-y">
              <p>Product Price</p>
              <p>Quantity</p>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="flex-x">
            <input type="checkbox" value={"Returning Customer"} />
            <p>Returning Customer?</p>
          </div>
          <form className="delivery-info">
            <h1>Delivery Information</h1>
            <div className="flex-x">
              <label className="flex-y">
                First Name
                <input
                  type="text"
                  placeholder="Type here..."
                  name="firstName"
                  id="firstName"
                  required
                />
              </label>
              <label className="flex-y">
                Last Name
                <input
                  type="text"
                  placeholder="Type here..."
                  name="lastName"
                  id="lastName"
                  required
                />
              </label>
            </div>
            <div>
              <label className="flex-y">
                Address
                <input
                  type="text"
                  placeholder="Type here..."
                  name="address"
                  id="address"
                  required
                />
              </label>
            </div>
            <div className="flex-x">
              <label className="flex-y">
                City/Suburb
                <input
                  type="text"
                  placeholder="Type here..."
                  name="city"
                  id="city"
                  required
                />
              </label>
              <label className="flex-y">
                State/Territory
                <input
                  type="text"
                  placeholder="Type here..."
                  name="state"
                  id="state"
                  required
                />
              </label>
              <label className="flex-y">
                Postcode
                <input
                  type="number"
                  placeholder="Type here..."
                  name="postcode"
                  id="postcode"
                  required
                />
              </label>
            </div>
            <div className="flex-x">
              <label className="flex-y">
                Mobile
                <input
                  type="number"
                  placeholder="Type here..."
                  name="mobile"
                  id="mobile"
                  required
                />
              </label>
              <label className="flex-y">
                Email
                <input
                  type="email"
                  placeholder="Type here..."
                  name="email"
                  id="email"
                  required
                />
              </label>
            </div>
          </form>
        </div>

        <div className="grid-item">
          <h1>Order Summery</h1>
          <div className="horizontal-line" />
          <div className="coupon-container">
            <input type="text" placeholder="Enter Coupon Code" />
            <button>Apply coupon</button>
          </div>
          <div className="payment-option-selector">
            <div className="flex-y">
              <input
                type="radio"
                id="cash"
                name="cash"
                value={"cash"}
                onChange={() => setPaymentOption("cash")}
                checked={paymentOption === "cash"}
              />
              <label htmlFor="cash" title="text">
                Cash
              </label>
            </div>
            <div className="flex-y">
              <input
                type="radio"
                id="paypal"
                name="paypal"
                value={"paypal"}
                onChange={() => setPaymentOption("paypal")}
                checked={paymentOption === "paypal"}
              />
              <label htmlFor="paypal" title="text">
                Paypal
              </label>
            </div>
            <div className="flex-y">
              <input
                type="radio"
                id="card"
                name="card"
                value={"card"}
                onChange={() => setPaymentOption("card")}
                checked={paymentOption === "card"}
              />
              <label htmlFor="card" title="text">
                Credit or Debit card
              </label>
            </div>
          </div>
          {paymentOption !== "cash" && (
            <form>
              <div className="flex-y">
                <label>
                  Email
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Type here..."
                    required
                  />
                </label>
              </div>
              <div className="flex-y">
                <label>
                  Card Holder Name
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Type here..."
                    required
                  />
                </label>
              </div>
              <div className="flex-x">
                <div className="flex-y">
                  <label>
                    Expiry
                    <input
                      type="text"
                      placeholder="Type here..."
                      name="expiry"
                      id="expiry"
                      required
                    />
                  </label>
                </div>
                <div className="flex-y">
                  <label>
                    CVC
                    <input
                      type="text"
                      placeholder="Type here..."
                      name="cvc"
                      id="cvc"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="amount-desc">
                <div className="flex-x">
                  <p>Sub Total</p>
                  <p>$amount</p>
                </div>
                <div className="flex-x">
                  <p>Shipping Cost</p>
                  <p>-$0.00</p>
                </div>
                <div className="horizontal-line" />
                <div className="flex-x">
                  <p>Total</p>
                  <p>=Total</p>
                </div>
              </div>
              <button>Pay $amount</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
