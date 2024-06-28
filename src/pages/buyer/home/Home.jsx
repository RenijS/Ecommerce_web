import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "../../../components/ui/ImageComponent";
import hashData from "../../../data/blurhash-hash.json";
import productArr from "../../../data/example-data.json";
import Carousel from "../../../components/ui/Carousel";

import "./Home.css";

import { GiPush } from "react-icons/gi";

//images
import shoppingImg from "../../../assets/images/shopping.jpg";
import bagsImg from "../../../assets/images/bags.jpg";
import booksImg from "../../../assets/images/books.jpg";
import furnitureImg from "../../../assets/images/furniture.jpg";
import shoesImg from "../../../assets/images/shoes.jpg";
import techImg from "../../../assets/images/tech.jpg";
import travelImg from "../../../assets/images/travel.jpg";
import CategoryCard from "../../../components/ui/CategoryCard";

const Home = () => {
  const categoriesArr = [
    {
      name: "Furniture",
      src: furnitureImg,
    },
    { name: "Books", src: booksImg },
    {
      name: "Tech",
      src: techImg,
    },
    {
      name: "Travel",
      src: travelImg,
    },
    {
      name: "Bags",
      src: bagsImg,
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
        <div className="image-container">
          <ImageComponent
            src={shoppingImg}
            desc="shopping image"
            hash={hashData.hash}
          />
        </div>
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
      </section>
    </>
  );
};

export default Home;
