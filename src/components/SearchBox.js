import React from "react";
import "../styles/Search.css";

function SearchBox({ handleChange }) {
  return (
    <div className="search">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <label aria-label="Search cards by name" htmlFor="search">
          Search cards by name
        </label>
        <input
          id="search"
          inputMode="search"
          type="search"
          placeholder="Search by name..."
          onChange={(e) => handleChange(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default SearchBox;
