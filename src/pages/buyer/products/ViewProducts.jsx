import React, { useState } from "react";
import { useParams } from "react-router-dom";

import exampleArr from "../../../data/example-data.json";

import { RxCross1 } from "react-icons/rx";

import "./ViewProducts.css";
import Dropdown from "../../../components/ui/Dropdown";
import ImageComponent from "../../../components/ui/ImageComponent";
import ProductCard from "../../../components/ui/ProductCard";
import skyImg from "../../../assets/images/sky.jpg";
import ColorFilter from "../../../components/filters/ColorFilter";
import PriceFilter from "../../../components/filters/PriceFilter";
import ReviewsFilter from "../../../components/filters/ReviewsFilter";

const ViewProducts = () => {
  //getting parameters from url
  const { searchType, itemName } = useParams();
  // decode the encoded search item
  let decodedSearchedItem = "";
  try {
    decodedSearchedItem = decodeURIComponent(itemName);
  } catch (e) {
    console.error(`Failed to decode searched item using ${itemName}: `, e);
    decodedSearchedItem = itemName; // Fallback to the original value if decoding fails
  }

  //to store user selected filter options
  const [selectedFilter, setSelectedFilter] = useState([]);

  const addSelectedFilter = (item) => {
    setSelectedFilter((prev) => [...prev, item]);
  };

  const removeSelectedFilter = (item) => {
    setSelectedFilter((prev) => prev.filter((selected) => selected !== item));
  };

  const clearSelectedFilter = () => {
    setSelectedFilter([]);
  };

  //checks if clear btn is hovered for css animation
  const [isClearHovered, setIsClearHovered] = useState(false);

  return (
    <div className="app__view-products">
      <div className="view-products_header">
        <ImageComponent
          src={skyImg}
          desc="sky"
          hash="LILzjM58Xoa$#ix^o#M|*0?bx[t7"
        />
        <div className="text-container">
          <p className="sub-text">{searchType}</p>
          <h1>
            {searchType === "all"
              ? "Discover our amazing products"
              : `${decodedSearchedItem.replace("-", " ").toUpperCase()}`}
          </h1>
        </div>
      </div>

      <div className="view-products_body">
        <section className="filter-tab">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p className="sub-text" style={{ color: "gray" }}>
                Filter Results
              </p>
              <div
                className={
                  selectedFilter.length === 0
                    ? "filter-clear-btn"
                    : "filter-clear-btn clear-btn-active"
                }
                onMouseEnter={() => setIsClearHovered(true)}
                onMouseLeave={() => setIsClearHovered(false)}
                onClick={() => clearSelectedFilter()}
              >
                <p className="sub-text" style={{ cursor: "pointer" }}>
                  Clear Filters
                </p>
                <div
                  className={
                    isClearHovered
                      ? "horizontal-line borderOnHover"
                      : "horizontal-line"
                  }
                ></div>
              </div>
            </div>
            <div className="dropdowns-container">
              <Dropdown
                filterTitle={"Colors"}
                selectedFilter={selectedFilter}
                addSelectedFilter={addSelectedFilter}
                removeSelectedFilter={removeSelectedFilter}
                dropdownComponent={ColorFilter}
              />
              <PriceFilter
                filterTitle="Price"
                addSelectedFilter={addSelectedFilter}
                removeSelectedFilter={removeSelectedFilter}
              />
              <Dropdown
                filterTitle={"Reviews"}
                selectedFilter={selectedFilter}
                addSelectedFilter={addSelectedFilter}
                removeSelectedFilter={removeSelectedFilter}
                dropdownComponent={ReviewsFilter}
              />
            </div>
          </div>
        </section>
        <section className="products-showcase">
          <h1>This is temporary product showcase</h1>
          <div className="products-grid">
            {exampleArr.map((product, index) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
          <div className="control-nav"></div>
        </section>
      </div>
    </div>
  );
};

export default ViewProducts;
