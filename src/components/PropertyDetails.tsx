import { useParams } from 'react-router-dom';
import propertyData from '../assets/properties(1).json';
import Carousel from './Carousel';
import styles from './PropertyDetails.module.css';
import React, { useState } from 'react';

interface Property {
  id: string;
  type: string;
  bedrooms: number;
  price: number;
  description: string;
  picture: string;
  pic1: string;
  pic2: string;
  pic3: string;
  pic4: string;
  location: string;
}

const PropertyDetailsComponent: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the property by ID
  const property = propertyData.properties.find((prop: Property) => prop.id === id);

  if (!property) {
    return <div>Property not found.</div>;
  }

  const images = [property.picture ,property.pic1, property.pic2, property.pic3, property.pic4];

  const [isFavorited, setIsFavorited] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((fav: any) => fav.id === property.id);
  });

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

  return (
    <div className={styles.detailsContainer}>
      <Carousel images={images} />
      <div className={styles.detailsContent}>
        <h2>{property.type}</h2>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Date Added:</strong> {property.added.year}/{property.added.month}/{property.added.day}</p>
        <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
        <p><strong>Description:</strong> {property.description}</p>
      </div>
      <button
      className={`${styles.addButton} ${isFavorited ? styles.favoritedButton : ''}`}
      onClick={toggleFavorite}
    >
      {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
    </button>
    </div>
  );
};

export default PropertyDetailsComponent;
