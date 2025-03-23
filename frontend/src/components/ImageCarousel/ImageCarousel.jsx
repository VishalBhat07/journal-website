import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

const images = [
  {
    src: "/vol1issue1.png",
    alt: "Volume 1 Issue 1",
    link: "https://heyzine.com/flip-book/67d753c541.html",
  },
  {
    src: "/vol1issue2.png",
    alt: "Volume 1 Issue 2",
    link: "https://heyzine.com/flip-book/1d9866f8fc.html",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <a
        href={images[currentIndex].link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="carousel-image"
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
        />
      </a>
    </div>
  );
};

export default ImageCarousel;
