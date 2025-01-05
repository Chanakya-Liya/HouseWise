import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from './ViewAllButton.module.css';

const ViewAllButton: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    // Navigate to /view-all-properties route
    navigate('/view-all-properties');
  };

  return (
    <div className={styles.viewAll}>
      <button className={styles.viewAllButton} onClick={handleClick}>
        View All Properties
      </button>
    </div>
  );
};

export default ViewAllButton;
