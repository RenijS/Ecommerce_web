import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="app__contact-page">
      <section className="contact-section">
        <h1>Contact Us</h1>
        <div className="flex-y" style={{ gap: "1rem" }}>
          <p>
            We love hearing from you! Please contact us via the email address or
            phone numbers below.
          </p>
          <p>
            For answers to frequently asked questions about your subscription,
            please check out our FAQ page.
          </p>
          <p>Email address: Help@gmail.com</p>
          <p>We will respond to your email within 72 hours.</p>
          <p>
            Hours of operation: Monday through Friday, 9 a.m. to 7 p.m. E.T.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
