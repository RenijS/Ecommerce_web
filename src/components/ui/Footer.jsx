import React from "react";
import LinkView from "./LinkView";
import "./Footer.css";
import ImageComponent from "./ImageComponent";

import hashData from "../../data/blurhash-hash.json";

const Footer = () => {
  const paymentsArr = [
    {
      name: "Stripe",
      src: "",
    },
    {
      name: "Visa",
      src: "",
    },
    {
      name: "Mastercard",
      src: "",
    },
    {
      name: "Paypal",
      src: "",
    },
    {
      name: "Google pay",
      src: "",
    },
    {
      name: "Apple pay",
      src: "",
    },
  ];

  return (
    <div className="app__footer-cover">
      <div className="horizontal-line" style={{}} />
      <div className="app__footer">
        <div className="left-section">
          <div className="logo-title">
            <h2>ShopMart</h2>
            <p className="sub-text">
              Shopping made easier for you. Shop variety of products with us.
            </p>
          </div>
          <section className="payments-container">
            <h4>Accepted Payments</h4>
            <div className="payments-grid">
              {paymentsArr.map((payment, index) => (
                <span className="payment-name" key={index}>
                  {payment.name}
                </span>
              ))}
            </div>
          </section>
        </div>
        <div className="vertical-line" style={{ borderColor: "gainsboro" }} />
        <div className="links-section">
          <LinkView
            title="Helpful Links"
            linkInfoList={[
              { text: "Home", url: "/" },
              { text: "Contact Us", url: "" },
              { text: "About Us", url: "" },
              { text: "Careers", url: "" },
              { text: "Help", url: "" },
            ]}
          />
          <LinkView
            title="Other Links"
            linkInfoList={[
              { text: "Gift Card", url: "" },
              { text: "Sell on ShopMart", url: "" },
              { text: "Terms & Condition", url: "" },
              { text: "Privacy Policy", url: "" },
            ]}
          />
          <LinkView
            title="Social Media"
            linkInfoList={[
              { text: "Facebook", url: "" },
              { text: "Instagram", url: "" },
              { text: "LinkedIn", url: "" },
              { text: "Twitter", url: "" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
