import React from "react";
import Slider from "react-slick";

import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";

//React slick for carousel
const Carousel = ({ arrayData }) => {
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
    <div className="carousel">
      <Slider {...settings}>
        {arrayData.map((data, index) => (
          <ProductCard data={data} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
