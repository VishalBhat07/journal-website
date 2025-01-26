import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  return (
    <Carousel fade interval={3000} controls={false} indicators={false}>
      <Carousel.Item>
        <a href="https://heyzine.com/flip-book/67d753c541.html">
        <img
          className="d-block carousel-image"
          src="./vol1issue1.png"
          alt="vol1issue1"
          />
          </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href='https://heyzine.com/flip-book/1d9866f8fc.html'>        
        <img
          className="d-block carousel-image"
          src="./vol1issue2.png"
          alt="vol1issue2"
        />
          </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
