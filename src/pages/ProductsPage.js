import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../services/api';
import '../styles/ProductPage.css';

const ProductsPage = () => {
  const { category } = useParams(); // get category from route
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        const filtered = response.data.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filtered);
      } catch (error) {
        console.error(`Error fetching ${category} products:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className={`${category.toLowerCase()}-page`}>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))
          ) : (
            <p>No {category} products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
