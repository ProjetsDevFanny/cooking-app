import React from "react";

const Search = () => {
  return (
    <div className="app">
      <form action="">
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Entrez le nom d'un aliment (en anglais)"
        />
      </form>
      <ul id="result"></ul>
    </div>
  );
};

export default Search;
