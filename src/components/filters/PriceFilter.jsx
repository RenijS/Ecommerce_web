import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const PriceFilter = ({ filterTitle }) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // event listener function to handle clicks outside of dropdown
    // dropdownRef.current checks if ref is set or not i.e., null or DOM dropdown
    // !dropdownRef.current.contains(event.target) checks if document clicked is dropdown or omthing else.
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    //attach above event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      style={{ borderRadius: isActive ? "20px 20px 0 0" : "20px" }}
    >
      <div
        className="dropdown-btn"
        onClick={() => {
          setIsActive((prevIsActive) => !prevIsActive);
        }}
      >
        <p>{filterTitle}</p>
        {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div
        className={`dropdown-content  ${
          isActive ? "dropdown-content-active" : ""
        }`}
      >
        <div>
          <div>
            <span>min</span>
            <span>max</span>
          </div>
          <div>
            <input type="range" name="" id="" />
            <input type="range" name="" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
