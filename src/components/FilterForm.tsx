import React from 'react';
import styles from './FilterForm.module.css';

interface FilterFormProps {
  onFilterChange: (name: string, value: string) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({ onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className={`${styles.filterForm} ${styles.slideIn}`}>
      <h2>Filter Properties</h2>
      <form>
        <label>
          Type:
          <select name="type">
            <option value="">All</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Flat">Flat</option>
          </select>
        </label>
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            min="1"
            max="10"
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
          />
        </label>
        <button
          className={styles.applyButton}
          type="button"
          onClick={() => {
            const formElements = (document.querySelector('form') as HTMLFormElement).elements;
            Array.from(formElements).forEach(element => {
              if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
                handleInputChange({ target: element } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
              }
            });
          }}
        >
          Apply
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
