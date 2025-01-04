import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './PropertyGrid.module.css';
import propertyData from '../assets/properties(1).json';

interface PropertyGridProps {
  sliceValue: number;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ sliceValue }) => {
  const properties = propertyData.properties.slice(0, sliceValue).map(property => ({
    ...property,
    onClick: (id: number) => {
      console.log(`Property ${id} clicked`);
    }
  }));

  return (
    <div className={styles.grid}>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
