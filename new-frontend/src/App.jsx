import React from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Silk from "../yes/Silk/Silk";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import BackgroundDotGrid from "./components/BackgroundDotGrid/BackgroundDotGrid";

const App = () => {
  return (
    <>
      <BackgroundDotGrid />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
