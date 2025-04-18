import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import '../styles/ProductPage.css';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        setProduct(response.data);
      } catch (err) {
        setError('Error fetching product details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-details-page">
      <h1>{product.name}</h1>
      <div className="product-details">
        <img
          src={product.image || '/default-image.jpg'}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      </div>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
