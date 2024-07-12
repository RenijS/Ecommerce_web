import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel, MdKeyboardArrowDown } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import ImageComponent from "./ImageComponent";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import menswearImg from "../../assets/images/menswear.jpg";
import womenswearImg from "../../assets/images/womenswear.jpg";
import jeweleryImg from "../../assets/images/Jewelery.jpg";
import techImg from "../../assets/images/tech.jpg";
import { useDispatch, useSelector } from "react-redux";

// Category array
const categoriesArr = [
  {
    name: "Electronics",
    src: techImg,
  },
  { name: "Jewelery", src: jeweleryImg },
  {
    name: "Men's clothing",
    src: menswearImg,
  },
  {
    name: "Women's clothing",
    src: womenswearImg,
  },
];

const CategoriesDropdown = ({
  isCategoriesCardExtended,
  categoriesDropdownRef,
}) => {
  return (
    <div
      className={
        isCategoriesCardExtended
          ? "navbar__categories-card categories-navlink_active"
          : "navbar__categories-card"
      }
      ref={categoriesDropdownRef}
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
  // For small screen, hamburger icon is clicked or not
  const [isToogleActive, setIsToogleActive] = useState(false);
  // For extended category card
  const [isCategoriesCardExtended, setIsCategoriesCardExtended] =
    useState(false);

  const categoriesDropdownRef = useRef(null);
  const categoriesButtonRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    //handles onClick for category dropdown
    const handleClick = (event) => {
      //when categories button is clicked
      if (
        categoriesButtonRef.current &&
        categoriesButtonRef.current.contains(event.target)
      ) {
        setIsCategoriesCardExtended((prev) => !prev);
      }
      //When clicked outside of categories button and categories' dropdown card
      else if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(event.target)
      ) {
        setIsCategoriesCardExtended(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    setIsCategoriesCardExtended(false);
  }, [location.pathname]);

  return (
    <>
      <header className="app__navbar-cover">
        <div className="app__navbar">
          <div className="navbar__start-nav">
            <NavLink
              to={"/"}
              className="navbar__logo"
              style={{ color: "black" }}
            >
              <img src="." alt="" />
              <p>ShopMart</p>
            </NavLink>
            <div className="hamburger_icon">
              {!isToogleActive && (
                <GiHamburgerMenu
                  className="icon"
                  onClick={() => setIsToogleActive(true)}
                />
              )}
              {isToogleActive && (
                <MdCancel
                  className="icon"
                  onClick={() => setIsToogleActive(false)}
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
                <p className="nav-link y-central" ref={categoriesButtonRef}>
                  Categories <MdKeyboardArrowDown />
                </p>
              </section>
              {/* Extra categories navigations */}
              <CategoriesDropdown
                isCategoriesCardExtended={isCategoriesCardExtended}
                categoriesDropdownRef={categoriesDropdownRef}
              />
            </li>
            <li>
              <NavLink to="/about-us" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="nav-link">
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
              <NavLink
                to={"/cart"}
                className="cart-btn xy-central"
                style={{ gap: "0.5rem" }}
              >
                <BsCartPlus />
                <span>Cart</span>
                <span>{totalQuantity}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
