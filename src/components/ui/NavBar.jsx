import React, { useEffect, useState } from "react";
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

const CategoriesDropdown = ({ isCategoriesCardExtended }) => {
  return (
    <div
      className={
        isCategoriesCardExtended
          ? "navbar__categories-card categories-navlink_active"
          : "navbar__categories-card"
      }
    >
      <section className="left-section">
        <h3>Variety of categories available.</h3>
        <NavLink to={"/recipes/all/all"}>Browse all categories {"->"}</NavLink>
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
  );
};

const NavBar = () => {
  //For small screen, hamburger icon is clicked or not.
  const [isToogleActive, setIsToogleActive] = useState(false);

  //For extended category card
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
            <li className="categories-li">
              <section className="categories-navlink_section">
                <NavLink
                  to=""
                  className="nav-link y-central"
                  onClick={() => {
                    setIsCategoriesCardExtended((prev) => !prev);
                  }}
                >
                  Categories <MdKeyboardArrowDown />
                </NavLink>
              </section>
              {/* Extra categories navigations */}
              <CategoriesDropdown
                isCategoriesCardExtended={isCategoriesCardExtended}
              />
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
          <div className="navbar__end-nav">
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
            <div
              className={
                isToogleActive ? "btns flex-x btns-active" : "btns flex-x"
              }
              style={{ gap: "2rem" }}
            >
              <div className="signin-btn xy-central" style={{ gap: "0.5rem" }}>
                <IoPersonOutline />
                <span>Account</span>
              </div>
              <div className="cart-btn xy-central" style={{ gap: "0.5rem" }}>
                <BsCartPlus />
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
