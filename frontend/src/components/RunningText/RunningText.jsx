// RunningText.jsx
import React from 'react';
import styles from './RunningText.module.css';

const RunningText = () => {
  return (
    <div className={styles["running-text"]}>
      <div className={styles["text-content"]}>
        Welcome to the Materials and Processing journal! Stay updated with the latest research and news from ASM India National Council Trust (INC).
      </div>
    </div>
  );
};

export default RunningText;
