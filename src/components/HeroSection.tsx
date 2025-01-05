// HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const handleViewAllProperties = () => {
    navigate('/view-all-properties');
  };

  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Find Your Dream Home</h1>
      <p className={styles.snarkyRemark}>Where You Find Your Dream Home For An Affordable Price</p>
      <div className={styles.searchSection}>
        <button className={styles.searchButton} onClick={handleViewAllProperties}>Find Your Perfect Home</button>
      </div>
    </div>
  );
};

export default HeroSection;
