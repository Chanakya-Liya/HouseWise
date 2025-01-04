import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">HouseWise</a>
      </div>
      <div className={styles.links}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Home
        </NavLink>
        <NavLink 
          to="/favourites" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Favourites
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? styles.active : ''}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
