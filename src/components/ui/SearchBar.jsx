import React, { useState } from "react";

import "./SearchBar.css";
import { censoringWords } from "../../utils/ProfanityFilter"; // Import the profanity filter function

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
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
    window.location.href = `/products/search/${encodedText}`;
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
  );
};

export default SearchBar;
