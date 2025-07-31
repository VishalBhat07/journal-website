import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Silk from "../yes/Silk/Silk";

const App = () => {
  return (
    <>
      <div className={styles.background}>
        <Silk
          speed={5}
          scale={1}
          color="#5227ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <Navbar />
    </>
  );
};

export default App;
