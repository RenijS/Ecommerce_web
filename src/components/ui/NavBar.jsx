import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LinkView from "./LinkView";
import { censoringWords } from "../../utils/ProfanityFilter"; // Import the profanity filter function
//Style
import "./NavBar.css";
//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel, MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import ImageComponent from "./ImageComponent";

//images
import bagsImg from "../../assets/images/bags.jpg";
import booksImg from "../../assets/images/books.jpg";
import furnitureImg from "../../assets/images/furniture.jpg";
import shoesImg from "../../assets/images/shoes.jpg";
import techImg from "../../assets/images/tech.jpg";
import travelImg from "../../assets/images/travel.jpg";

const NavBar = () => {
  //For small screen, hamburger icon is clicked or not.
  const [isToogleActive, setIsToogleActive] = useState(false);

  //For recipe card when recipe navlink is hovered
  const [isCategoriesCardVisible, setIsCategoriesCardVisible] = useState(false);
  //For small screen, recipe card when extension is clicked
  const [isCategoriesCardExtended, setIsCategoriesCardExtended] =
    useState(false);

  //For search bar
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // Apply the profanity filter to the search text before performing the search
    const filteredText = censoringWords(searchText);
    //Encode the filtered text to use in URL, special characters (like @%) in the URL, which are not properly encoded gives error.
    const encodedText = encodeURIComponent(filteredText);
    // Perform the search with the filtered text
    console.log("Filtered search text:", encodedText);
    // Navigate to the search results page with the filtered text
    window.location.href = `/recipes/search/${encodedText}`;
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  //Category array
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

  return (
    <>
      <header className="app__navbar-cover">
        <div className="app__navbar">
          <div className="navbar__start-nav">
            <div className="navbar__logo">
              <img src="." alt="" />
              <p>ShopMart</p>
            </div>
            <div className="hamburger_icon">
              {!isToogleActive && (
                <GiHamburgerMenu
                  className="icon"
                  onClick={() => {
                    setIsToogleActive(true);
                  }}
                />
              )}
              {isToogleActive && (
                <MdCancel
                  className="icon"
                  onClick={() => {
                    setIsToogleActive(false);
                  }}
                />
              )}
            </div>
          </div>
          <ul
            className={
              isToogleActive
                ? "navbar__navigations toogled"
                : "navbar__navigations"
            }
          >
            <li>
              <NavLink to="/" className="nav-link">
                What's New
              </NavLink>
            </li>
            {/* Recipe navigation li */}
            <li
              onMouseEnter={() => setIsCategoriesCardVisible(true)}
              onMouseLeave={() => setIsCategoriesCardVisible(false)}
              className="categories-li"
            >
              <section className="categories-navlink_section">
                <NavLink
                  to=""
                  className="nav-link xy-central"
                  onClick={() => setIsCategoriesCardVisible(false)}
                >
                  Categories <MdKeyboardArrowDown />
                </NavLink>
                <HiArrowDown
                  className={
                    isCategoriesCardExtended
                      ? "arrow-down_img icon gone"
                      : "arrow-down_img icon"
                  }
                  onClick={() => setIsCategoriesCardExtended(true)}
                />
                <MdCancel
                  className={
                    isCategoriesCardExtended
                      ? "cancel_img icon"
                      : "cancel_img icon gone"
                  }
                  onClick={() => setIsCategoriesCardExtended(false)}
                />
              </section>
              {/* Extra recipes navigations for small screen */}
              <section
                className={
                  isCategoriesCardExtended
                    ? "extended-categories_section categories-card_extended"
                    : "extended-categories_section"
                }
              >
                <LinkView
                  title="Quick Links"
                  linkInfoList={[
                    { text: "Breakfast", url: `/recipes/category/` },
                    { text: "Lunch", url: "/recipes/category/" },
                    { text: "Dinner", url: "/recipes/category/" },
                    { text: "Dessert", url: "/recipes/category/" },
                    { text: "Drink", url: "/recipes/category/" },
                  ]}
                  hideNav={setIsToogleActive}
                />
                <div className="horizontal-line" />
                <LinkView
                  title="Popular Categories"
                  linkInfoList={[
                    { text: "Healthy", url: "/recipes/category/" },
                    { text: "Chicken", url: "/recipes/category/" },
                    { text: "Easy", url: "/recipes/category/" },
                    { text: "Fast", url: "/recipes/category/" },
                    { text: "Rice", url: "/recipes/category/" },
                  ]}
                  hideNav={setIsToogleActive}
                />
                <div className="horizontal-line" />
                <LinkView
                  title="Recipes by diet"
                  linkInfoList={[
                    { text: "Vegan", url: "/recipes/category/" },
                    { text: "Vegeterian", url: "/recipes/category/" },
                    { text: "Pescatarian", url: "/recipes/category/" },
                    { text: "Low Carb", url: "/recipes/category/" },
                  ]}
                  hideNav={setIsToogleActive}
                />
              </section>
            </li>
            <li>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Product"
              value={searchText}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
          <div className="signin-btn xy-central" style={{ gap: "0.5rem" }}>
            <IoPersonOutline />
            <span>Account</span>
          </div>
          <div className="cart-btn xy-central" style={{ gap: "0.5rem" }}>
            <BsCartPlus />
            <span>Cart</span>
          </div>
        </div>
      </header>
      {/* Extra recipes navigation card when hovered */}
      <div
        className={
          isCategoriesCardVisible
            ? "navbar__categories-card categories-navlink_onhover"
            : "navbar__categories-card"
        }
        onMouseEnter={() => setIsCategoriesCardVisible(true)}
        onMouseLeave={() => setIsCategoriesCardVisible(false)}
      >
        <section className="left-section">
          <h3>Variety of categories available to you.</h3>
          <NavLink to={"/recipes/all/all"}>
            Browse all categories {"->"}
          </NavLink>
        </section>
        <section className="right-section">
          {categoriesArr.map((category) => (
            <NavLink to={"/"}>
              <ImageComponent
                src={category.src}
                desc={category.name}
                hash={"L6BfLT140#~816,@rsog9ew4$*S5"}
              />
              <span>{category.name}</span>
            </NavLink>
          ))}
        </section>
      </div>
    </>
  );
};

export default NavBar;
