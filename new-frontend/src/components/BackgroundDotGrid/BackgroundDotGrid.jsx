import React from 'react';
import DotGrid from '../../../yes/DotGrid/DotGrid';
import styles from './BackgroundDotGrid.module.css';

const BackgroundDotGrid = () => {
  return (
    <div className={styles.background}>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#281e37"
        activeColor="#177cda"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
};

export default BackgroundDotGrid;
