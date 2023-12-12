import React, { useState } from 'react';
import './TollCalculation.css';
const SearchBox = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Pass the search query to the parent component or perform search logic here
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for restaurant,cafes.."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;