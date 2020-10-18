import React from "react";

function SearchBox(props) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        placeholder="Search by name..."
        onChange={(e) => props.handleChange(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchBox;
