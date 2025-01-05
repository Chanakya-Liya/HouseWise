import React, { useState } from 'react';
import PropertyGrid from '../components/PropertyGrid';
import styles from './Favourites.module.css';

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });

  const handleDrop = (event: React.DragEvent) => {
    const propertyId = event.dataTransfer.getData('propertyId');

    if (propertyId) {
      const updatedFavorites = favorites.filter(
        (property: any) => property.id !== propertyId
      );
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorites</h1>
      <div
        className={styles.dropZone}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drag cards here to remove from favorites
      </div>
      <PropertyGrid properties={favorites} sliceValue={favorites.length} />
    </div>
  );
};

export default FavoritesPage;
