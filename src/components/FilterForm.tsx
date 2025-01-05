import React, { useState } from 'react';
import styles from './FilterForm.module.css';

const FilterForm: React.FC = () => {
  return (
    <>
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
          </form>
        </div>
    </>
  );
};

export default FilterForm;
