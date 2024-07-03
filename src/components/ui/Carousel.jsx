import React, { useEffect, useRef } from "react";
import Slider from "react-slick";

import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

//React slick for carousel
const Carousel = ({ arrayData }) => {
  const carouselRef = useRef(null);
  const identifierRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const identifier = identifierRef.current;

    const observer = new IntersectionObserver((entities, observer) => {
      const entry = entities[0];
      if (entry.isIntersecting) {
        carousel.classList.add("animateSlideDown");
      }
    });
    observer.observe(identifier);

    return () => {
      observer.unobserve(identifier);
    };
  }, []);

  //slide to show according to window width
  const slideAmount = () => {
    if (window.innerWidth > 700) return 3;
    else if (window.innerWidth > 400) return 2;
    else return 1;
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideAmount(),
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="identifier" ref={identifierRef} />
      <div className="carousel" ref={carouselRef}>
        <Slider {...settings}>
          {arrayData.map((data, index) => (
            <ProductCard data={data} index={index} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
