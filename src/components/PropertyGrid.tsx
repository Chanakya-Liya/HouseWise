import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './PropertyGrid.module.css';
import propertyData from '../assets/properties(1).json';

interface PropertyGridProps {
  properties?: Array<any>; 
  sliceValue?: number; 
  onDragStart?: any;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, sliceValue }) => {
  const displayedProperties = properties
    ? properties.slice(0, sliceValue ?? properties.length)
    : propertyData.properties.slice(0, sliceValue ?? propertyData.properties.length);

  return (
    <div className={styles.grid}>
      {displayedProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyGrid;
