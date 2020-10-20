import React from "react";
import "./Search.css";

function SearchBox(props) {
  return (
    <div id="search">
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search cards by name</label>
        <input
          id="search"
          inputMode="search"
          type="search"
          placeholder="Search by name..."
          onChange={(e) => props.handleChange(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default SearchBox;
