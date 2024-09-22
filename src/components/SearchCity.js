import React, { useState } from 'react';
import './SearchCity.css';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="city" className="search-label">
        Enter the city you want to search:
      </label>
      <input
        type="text"
        id="city"
        value={city}
        className="search-input"
        placeholder="Search city..."
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
