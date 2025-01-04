import React from 'react';
import styles from './PropertyCard.module.css';

interface Property {
  id: string;
  type: string;
  bedrooms: number;
  price: number;
  description: string;
  picture: string;
  url: string;
  location: string;
  onClick: (id: number) => void;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  return (
    <div className={styles.card}>
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
    </div>
  );
};

export default PropertyCard;
