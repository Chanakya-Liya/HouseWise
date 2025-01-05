import React, { useState } from 'react';
import styles from './PropertyCard.module.css';
import { useNavigate } from 'react-router-dom';

// Define the Property interface
interface Property {
  id: string;
  type: string;
  bedrooms: number;
  price: number;
  description: string;
  picture: string;
  url: string;
  location: string;
}

// Define the PropertyCard component
const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  // State to manage if the property is favorited
  const [isFavorited, setIsFavorited] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((fav: any) => fav.id === property.id);
  });

  const navigate = useNavigate();

  // Function to toggle the favorite status of the property
  const toggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = favorites.filter((fav: any) => fav.id !== property.id);
    } else {
      updatedFavorites = [...favorites, property];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  // Function to handle card click and navigate to property details
  const handleCardClick = () => {
    navigate(`/property-details/${property.id}`);
  };

  // Function to handle drag start event
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('propertyId', property.id);
  };

  return (
    <div
      className={styles.card}
      onClick={handleCardClick}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <img
        src={property.picture}
        alt={property.type}
        className={styles.propertyImage}
      />
      <div className={styles.cardContent}>
        <h3>{property.type}</h3>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Location: {property.location}</p>
        <p>Price: ${property.price.toLocaleString()}</p>
      </div>
      <div
        className={`${styles.heartIcon} ${isFavorited ? styles.favorited : ''}`}
        onClick={toggleFavorite}
      >
        <span className="material-symbols-outlined">
          {isFavorited ? '🧡' : '🤍'}
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
