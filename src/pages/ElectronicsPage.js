import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../services/api'; // Make sure this service is properly defined
import '../styles/ProductPage.css'; // Ensure this path is correct and the file exists

const ElectronicsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const electronics = response.data.filter(
          (product) => product.category.toLowerCase() === 'electronics'
        );
        setProducts(electronics);
      } catch (error) {
        console.error('Error fetching electronics products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="electronics-page">
      <h1>Electronics Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))
          ) : (
            <p>No electronics products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ElectronicsPage;
