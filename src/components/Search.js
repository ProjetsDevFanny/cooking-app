import React from "react";
import { useState } from "react";
import "../styles/components/search.css";

const Search = ({ getData }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // fonction pour récupérer la valeur de l'input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    getData(value); // On appelle la fonction getData avec la valeur de l'input
  };

  return (
    <div className="app">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="search"
          placeholder="Entrez le nom d'un aliment (en anglais)"
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      <ul id="result"></ul>
    </div>
  );
};

export default Search;
