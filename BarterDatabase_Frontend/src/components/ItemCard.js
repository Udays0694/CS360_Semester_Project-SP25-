import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/global.css'; // Use relative path to styles directory

const ItemCard = ({ product }) => {
  const { id, name, description, imageUrl, category } = product;

  // Fallback image if the image URL is not available
  const fallbackImage = 'path_to_placeholder_image.jpg';  // Fallback image URL

  return (
    <div className="item-card">
      <img src={imageUrl || fallbackImage} alt={name} className="item-card-image" />
      <div className="item-card-details">
        <h2 className="item-card-title">{name}</h2>
        <p className="item-card-category">{category}</p>
        <p className="item-card-description">{description}</p>
        <Link to={`/product/${id}`} className="item-card-button">
          View Details
        </Link>
      </div>
    </div>
  );
};

// Prop types validation
ItemCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
