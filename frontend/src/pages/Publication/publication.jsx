import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import publication from "../Publication/publication.json";
import "./publication.css";

const PublicationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="publication-carousel-container">
      {/* Top navigation buttons */}
      <div className="carousel-top-controls">
        <button
          className="prev"
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : publication.length - 1
            )
          }
        >
          &#9664;
        </button>

        <div className="carousel-indicators">
          {publication.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="next"
          onClick={() =>
            setActiveIndex((prevIndex) =>
              prevIndex < publication.length - 1 ? prevIndex + 1 : 0
            )
          }
        >
          &#9654;
        </button>
      </div>

      {/* Carousel */}
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        interval={null}
        controls={false}
        indicators={false}
      >
        {publication.map((item, index) => (
          <Carousel.Item key={index}>
            {/* Custom Card */}
            <div className="custom-card">
              <h4 className="custom-card-title">{item.title}</h4>
              <div className="custom-card-content">
                {item.content.map((contentItem, contentIndex) => {
                  if (contentItem.type === "text") {
                    return <p key={contentIndex}>{contentItem.value}</p>;
                  } else if (contentItem.type === "list") {
                    return (
                      <ul key={contentIndex}>
                        {contentItem.value.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PublicationCarousel;
