import React, { useEffect, useRef } from "react";
import ImageComponent from "../../../components/ui/ImageComponent";
import hashData from "../../../data/blurhash-hash.json";
import productArr from "../../../data/example-data.json";
import Carousel from "../../../components/ui/Carousel";

import "./Home.css";

import { GiPush } from "react-icons/gi";

//images
import shoppingImg from "../../../assets/images/shopping.jpg";
import menswearImg from "../../../assets/images/menswear.jpg";
import womenswearImg from "../../../assets/images/womenswear.jpg";
import jeweleryImg from "../../../assets/images/Jewelery.jpg";
import shoesImg from "../../../assets/images/shoes.jpg";
import techImg from "../../../assets/images/tech.jpg";
import travelImg from "../../../assets/images/travel.jpg";
import chairsImg from "../../../assets/images/chairs.jpg";
import CategoryCard from "../../../components/ui/CategoryCard";

const Home = () => {
  const categoriesArr = [
    {
      name: "Men's clothing",
      src: menswearImg,
    },
    { name: "Women's clothing", src: womenswearImg },
    {
      name: "Electronics",
      src: techImg,
    },
    {
      name: "Jewelery",
      src: jeweleryImg,
    },
    {
      name: "Travel",
      src: travelImg,
    },
    {
      name: "Shoes",
      src: shoesImg,
    },
  ];

  //to use for animation
  const logoRef = useRef();
  const textRef = useRef();
  const welcomeTextRef = useRef();

  useEffect(() => {
    //observer2 for text
    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);

      if (entry.isIntersecting) {
        welcomeTextRef.current.classList.add("opacity-transition");
        textRef.current.classList.add("move-text");
      }
    });
    observer2.observe(textRef.current);

    //observer3 for logo
    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);

      if (entry.isIntersecting) {
        logoRef.current.classList.add("move-logo");
      }
    });
    observer3.observe(logoRef.current);
  }, []);

  return (
    <>
      <section className="app__top-banner">
        <ImageComponent
          src={shoppingImg}
          desc="shopping image"
          hash={hashData.hash}
        />
        <div className="texts-container">
          <p ref={welcomeTextRef}>Welcome to ShopMart</p>
          <span ref={textRef} className="contain-1">
            <span ref={logoRef} className="push-img">
              <GiPush />
            </span>
            Shopping made easier for you. Shop variety of products with us.
          </span>
        </div>
      </section>

      <section className="app__middle-container">
        {/* Best deals section */}
        <div className="best-deal">
          <h2>Today's Best Deals!</h2>
          <Carousel arrayData={[...productArr]} />
        </div>
        {/* Top categories section */}
        <div className="top-categories">
          <h2>Shop our Top Categories</h2>
          <div className="categories-grid">
            {categoriesArr.map((category, index) => (
              <CategoryCard
                key={index}
                name={category.name}
                src={category.src}
              />
            ))}
          </div>
        </div>
        {/* Weekly popular section */}
        <div className="weekly-popular">
          <h2>Weekly Popular Products</h2>
          <Carousel arrayData={[...productArr]} />
        </div>
        {/* Picture ad with animation */}
        <div className="picture-ad">
          <div className="img-container">
            <img src={chairsImg} alt={"chairs"} loading="lazy" />
          </div>
          <div className="ad-section">
            <h2>Get 5% Cash Back On $200</h2>
            <span>
              Shopping is a bit of a relaxing hobby for me, which is sometimes
              troubling for the bank balance.
            </span>
            <button>Learn More</button>
          </div>
        </div>
        {/* Weekly popular section */}
        <div className="weekly-popular">
          <h2>Most Selling Products</h2>
          <Carousel arrayData={[...productArr]} />
        </div>
      </section>
    </>
  );
};

export default Home;
