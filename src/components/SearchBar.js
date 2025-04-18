import React, { useState } from 'react';
import './styles/global.css';  // Adjust the path if needed

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handles the change in the search input field
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);  // Pass the search query to the parent component (like HomePage)
    }
  };

  // Clears the search input
  const handleClear = () => {
    setQuery('');
    onSearch(''); // Optionally, clear the search results
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search products..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
        {query && (
          <button type="button" className="clear-button" onClick={handleClear}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
