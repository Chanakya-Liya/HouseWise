import React, { useState } from 'react';
import FilterForm from '../components/FilterForm';
import PropertyGrid from '../components/PropertyGrid';
import propertyData from '../assets/properties(1).json';

const PropertyPage: React.FC = () => {
  const [filters, setFilters] = useState({
    type: '',
    bedrooms: '',
    location: '',
    maxPrice: '',
  });

  // Filtered properties based on the filter state
  const filteredProperties = propertyData.properties.filter((property) => {
    const matchesType = filters.type ? property.type === filters.type : true;
    const matchesBedrooms = filters.bedrooms
      ? property.bedrooms === parseInt(filters.bedrooms)
      : true;
    const matchesLocation = filters.location
      ? property.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesMaxPrice = filters.maxPrice
      ? property.price <= parseInt(filters.maxPrice)
      : true;

    return matchesType && matchesBedrooms && matchesLocation && matchesMaxPrice;
  });

  // Update filter state
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <FilterForm onFilterChange={handleFilterChange} />
      <PropertyGrid properties={filteredProperties} sliceValue={filteredProperties.length} />
    </div>
  );
};

export default PropertyPage;
