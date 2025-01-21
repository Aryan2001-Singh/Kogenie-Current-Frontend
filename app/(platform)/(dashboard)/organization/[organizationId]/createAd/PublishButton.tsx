import React from "react";
import styles from "../../../../../../styles/PublishButton.module.css";

interface PublishButtonProps {
  onClick: () => void; // Function type for handling button click
}

const PublishButton: React.FC<PublishButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.publishButton}>
      <span className={styles.icon}>📤</span> Publish Ad
    </button>
  );
};

export default PublishButton;

