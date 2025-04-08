import React, { useState, useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../services/api'; // Assuming you have a service to fetch products
import '../styles/HomePage.css'; // Use relative path to styles directory

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state for API call
  const [error, setError] = useState(null);  // Error state
  const categories = ['Electronics', 'Furniture', 'Books', 'Clothing', 'Toys'];  // Example categories

  useEffect(() => {
    // Fetch all products from the API
    getProducts()
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);  // Initially show all products
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error("Error fetching products: ", error);
        setError("Failed to load products.");  // Set error message
        setLoading(false);  // Stop loading even in case of error
      });
  }, []);

  // Handles filtering products based on the selected category
  const handleCategoryFilter = (category) => {
    if (!category) {
      setFilteredProducts(products);  // Show all products if no category is selected
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);  // Update filtered products
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome to the Barter Database</h1>
      
      {/* Loading Spinner or Message */}
      {loading && <p>Loading products...</p>}

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      <CategoryFilter categories={categories} onFilter={handleCategoryFilter} />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ItemCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
