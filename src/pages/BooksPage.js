import React, { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard';
import { getProducts } from '../services/api';
import '../styles/ProductPage.css';

const BooksPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getProducts();
        const books = response.data.filter(
          (product) => product.category.toLowerCase() === 'books'
        );
        setProducts(books);
      } catch (error) {
        console.error('Error fetching books products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="books-page">
      <h1>Books Products</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))
          ) : (
            <p>No books products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BooksPage;
