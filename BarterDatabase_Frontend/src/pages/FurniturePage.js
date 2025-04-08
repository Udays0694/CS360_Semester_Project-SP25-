import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../services/api';
import '../styles/ProductPage.css';

const FurniturePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFurniture = async () => {
      try {
        const response = await getProducts();
        const furniture = response.data.filter(
          (product) => product.category.toLowerCase() === 'furniture'
        );
        setProducts(furniture);
      } catch (error) {
        console.error('Error fetching furniture products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFurniture();
  }, []);

  return (
    <div className="furniture-page">
      <h1>Furniture Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))
          ) : (
            <p>No furniture products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FurniturePage;
