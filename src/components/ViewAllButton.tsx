import React from "react";
import styles from "./ViewAllButton.module.css";

interface ViewAllButtonProps {
  onClick: () => void;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.viewAll}>
      <button className={styles.viewAllButton} onClick={onClick}>
        View All Properties
      </button>
    </div>
  );
};

export default ViewAllButton;
