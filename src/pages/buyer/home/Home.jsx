import React from "react";
import ImageComponent from "../../../components/ui/ImageComponent";
import shoppingImg from "../../../assets/images/shopping.jpg";
import hashData from "../../../data/blurhash-hash.json";
import productArr from "../../../data/example-data.json";

import "./Home.css";
import Carousel from "../../../components/ui/Carousel";

const Home = () => {
  return (
    <>
      <div className="app__top-banner">
        <div className="image-container">
          <ImageComponent
            src={shoppingImg}
            desc="shopping image by Kasjan Farbisz from Pixabay"
            hash={hashData.hash}
          />
        </div>
        <div className="texts-container">
          <p>Welcome to ShopMart</p>
          <span>
            Shopping made easier for you. Shop variety of products with us.
          </span>
        </div>
      </div>
      <div className="app__middle-container">
        <h1>Today's Best Deals!</h1>
        <Carousel arrayData={[...productArr]} />
      </div>
    </>
  );
};

export default Home;
