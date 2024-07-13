import React from 'react';
import './Search.css';

const Search = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-box"
    />
  );
};

export default Search;
