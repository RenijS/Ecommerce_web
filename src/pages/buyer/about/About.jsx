import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="app__about-page">
      <section className="about-section">
        <h1>About Us</h1>
        <div className="flex-y" style={{ gap: "1rem" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            totam soluta quasi optio explicabo perferendis nobis, ipsum velit
            sed porro est asperiores beatae harum, voluptas distinctio eius,
            alias laboriosam odio?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            nostrum, eos ducimus tempore quibusdam mollitia dolores quos
            perspiciatis amet. Dolore vel, perspiciatis adipisci quidem
            provident atque voluptatem tenetur quaerat numquam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
