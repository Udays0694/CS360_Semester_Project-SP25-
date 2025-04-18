import React, { useState } from 'react';
import '../styles/global.css';  // Correct path from components to styles folder

const CategoryFilter = ({ categories, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Handles the change in the category dropdown
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(category); // Pass the selected category to the parent component
  };

  return (
    <div className="category-filter">
      <label htmlFor="category" className="category-label">
        Filter by Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="category-select"
      >
        <option value="">All Categories</option>
        {categories && categories.length > 0 ? (
          categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option disabled>No categories available</option> // Handle empty categories
        )}
      </select>
    </div>
  );
};

export default CategoryFilter;
