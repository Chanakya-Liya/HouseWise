import React from 'react';
import { useParams } from 'react-router-dom';
import propertyData from '../assets/properties(1).json';
import Carousel from './Carousel';
import styles from './PropertyDetails.module.css';

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

  return (
    <div className={styles.detailsContainer}>
      <Carousel images={images} />
      <div className={styles.detailsContent}>
        <h2>{property.type}</h2>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
        <p><strong>Description:</strong> {property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetailsComponent;
