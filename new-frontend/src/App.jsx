import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Silk from "../yes/Silk/Silk";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <div className={styles.background}>
        <img src="/background.svg" alt="backgournd" />
      </div>
      <Navbar />
      <Home />


    </>
  );
};

export default App;
