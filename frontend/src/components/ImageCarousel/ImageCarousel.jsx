import React from 'react';
import image1 from "../../assets/vol1issue1.png";
import image2 from "../../assets/vol1issue2.png";
import './ImageCarousel.css'; // Import the CSS file

const ImageCarousel = () => {
  return (
    <div className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img src={image1} className="d-block w-100 carousel-image" alt="vol1issue1" />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img src={image2} className="d-block w-100 carousel-image" alt="vol2issue2" />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
