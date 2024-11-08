import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../../assets/vol1issue1.png";
import image2 from "../../assets/vol1issue2.png";
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <Carousel fade interval={3000} controls={false} indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image1}
          alt="vol1issue1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image2}
          alt="vol2issue2"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
