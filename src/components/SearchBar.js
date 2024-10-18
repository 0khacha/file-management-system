import React from 'react';
import '../../assets/css/SearchBar.css';
import { Search } from 'react-feather';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search here ... " />
      <Search className="search-icon" />
    </div>
  );
};

export default SearchBar;
