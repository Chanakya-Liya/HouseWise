import React, { useState } from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterClick = () => setShowFilter(!showFilter);

  return (
    <div className={`${styles.hero} ${showFilter ? styles.expandedHero : ''}`}>
      <h1 className={styles.title}>Find Your Dream Home</h1>
      <p className={styles.snarkyRemark}>Where You Find Your Dream Home For An Affordable Price</p>
      {!showFilter ? (
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search for properties..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>Search</button>
          <button className={styles.filterButton} onClick={handleFilterClick}>
            Filter
          </button>
        </div>
      ) : (
        <div className={`${styles.filterForm} ${styles.slideIn}`}>
          <h2>Filter Properties</h2>
          <form>
            <label>
              Type:
              <select>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
              </select>
            </label>
            <label>
              Bedrooms:
              <input type="number" min="1" max="10" />
            </label>
            <label>
              Max Price:
              <input type="number" />
            </label>
            <button className={styles.applyButton}>Apply</button>
            <button
              className={styles.cancelButton}
              onClick={(e) => {
                e.preventDefault();
                setShowFilter(false);
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
