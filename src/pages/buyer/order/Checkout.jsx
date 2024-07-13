import React, { useState } from "react";
import "./Checkout.css";
import ImageComponent from "../../../components/ui/ImageComponent";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../../../redux/slices/cartSlice";

const OrderAccepted = () => {
  return (
    <div className="accepted-msg" style={{ margin: "4rem auto" }}>
      <h1>Thank you for the order</h1>
      <p>Your order has been accepted</p>
    </div>
  );
};

const Checkout = () => {
  const [paymentOption, setPaymentOption] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
    mobile: "",
    email: "",
    cardEmail: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });
  const [orderAccepted, setOrderAccepted] = useState(false);

  const dispatch = useDispatch();

  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch order action here
    setOrderAccepted(true);
    dispatch(clearItems());
  };

  if (orderAccepted) {
    return <OrderAccepted />;
  }

  return (
    <div className="app__checkout">
      <p className="sub-text">Checkout</p>
      <div className="checkout-grid">
        <div className="product-info grid-item">
          <h2>Review Item And Shipping</h2>
          {items.map((item) => (
            <section className="item-section" key={item.id}>
              <ImageComponent
                src={item.image}
                desc={""}
                hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
              />
              <div className="flex-y" style={{ width: "100%" }}>
                <div
                  className="flex-x"
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    gap: "1.5rem",
                  }}
                >
                  <h3>{item.title}</h3> <p>${item.price}</p>
                </div>
                <p>Quantity: {item.quantity}</p>
              </div>
            </section>
          ))}
        </div>

        <div className="grid-item">
          <div className="flex-x">
            <input type="checkbox" value={"Returning Customer"} />
            <p>Returning Customer?</p>
          </div>
          <form className="delivery-info">
            <h2>Delivery Information</h2>
            <div className="flex-x" style={{ gap: "1rem" }}>
              <label className="flex-y">
                First Name
                <input
                  type="text"
                  placeholder="Type here..."
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
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
                  value={formData.lastName}
                  onChange={handleInputChange}
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
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="flex-x" style={{ flexWrap: "wrap", gap: "1rem" }}>
              <label className="flex-y">
                City/Suburb
                <input
                  type="text"
                  placeholder="Type here..."
                  name="city"
                  id="city"
                  value={formData.city}
                  onChange={handleInputChange}
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
                  value={formData.state}
                  onChange={handleInputChange}
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
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
            <div className="flex-x" style={{ gap: "1rem" }}>
              <label className="flex-y">
                Mobile
                <input
                  type="number"
                  placeholder="Type here..."
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
            </div>
          </form>
        </div>

        <div className="grid-item order-summary-contain">
          <h2>Order Summary</h2>
          <div className="horizontal-line" />
          <div className="coupon-container">
            <input type="text" placeholder="Enter Coupon Code" />
            <button>Apply coupon</button>
          </div>
          <div className="horizontal-line" />
          <div className="payment-option-selector">
            <div className="flex-x">
              <input
                type="radio"
                id="cash"
                name="paymentOption"
                value="cash"
                onChange={() => setPaymentOption("cash")}
                checked={paymentOption === "cash"}
              />
              <label htmlFor="cash" title="Cash">
                Cash
              </label>
            </div>
            <div className="flex-x">
              <input
                type="radio"
                id="paypal"
                name="paymentOption"
                value="paypal"
                onChange={() => setPaymentOption("paypal")}
                checked={paymentOption === "paypal"}
              />
              <label htmlFor="paypal" title="Paypal">
                Paypal
              </label>
            </div>
            <div className="flex-x">
              <input
                type="radio"
                id="card"
                name="paymentOption"
                value="card"
                onChange={() => setPaymentOption("card")}
                checked={paymentOption === "card"}
              />
              <label htmlFor="card" title="Credit or Debit card">
                Credit or Debit card
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {paymentOption !== "cash" && (
              <>
                <label className="flex-y">
                  Email
                  <input
                    type="text"
                    name="cardEmail"
                    id="cardEmail"
                    placeholder="Type here..."
                    value={formData.cardEmail}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label className="flex-y">
                  Card Holder Name
                  <input
                    type="text"
                    name="cardName"
                    id="cardName"
                    placeholder="Type here..."
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <div className="flex-x" style={{ gap: "1rem" }}>
                  <label className="flex-y">
                    Expiry
                    <input
                      type="text"
                      placeholder="Type here..."
                      name="expiry"
                      id="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label className="flex-y">
                    CVC
                    <input
                      type="text"
                      placeholder="Type here..."
                      name="cvc"
                      id="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                </div>
              </>
            )}
            <div className="amount-desc">
              <div className="flex-x">
                <p>{`Sub Total: $${totalAmount}`}</p>
              </div>
              <div className="flex-x">
                <p>{`Shipping Cost: $0.00`}</p>
              </div>
              <div className="horizontal-line" />
              <div className="flex-x">
                <p>{`Total: $${totalAmount}`}</p>
              </div>
            </div>
            <button type="submit">Pay ${totalAmount}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
