import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

//Style
import "./NavBar.css";
//Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel, MdKeyboardArrowDown } from "react-icons/md";
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
import SearchBar from "./SearchBar";

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
        <NavLink to={"/products/all/all"}>Browse all categories {"->"}</NavLink>
      </section>
      <section className="right-section">
        {categoriesArr.map((category, index) => (
          <NavLink to={`/products/category/${category.name}`} key={index}>
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

  let location = useLocation();

  useEffect(() => {
    setIsCategoriesCardExtended(false);
  }, [location.pathname]);

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
              <NavLink to="/products/clicked/new" className="nav-link">
                What's New
              </NavLink>
            </li>
            {/* Recipe navigation li */}
            <li className="categories-li">
              <section className="categories-navlink_section">
                <p
                  className="nav-link y-central"
                  onClick={() => {
                    setIsCategoriesCardExtended((prev) => !prev);
                  }}
                >
                  Categories <MdKeyboardArrowDown />
                </p>
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
            {/* Search bar */}
            <SearchBar />
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
