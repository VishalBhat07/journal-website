import React from "react";
import { Carousel } from "react-bootstrap";
import "./JournalCard.css";
import slide1 from "../../assets/vol1issue1.png"; // Update path as necessary
import slide2 from "../../assets/vol1issue2.png"; // Update path as necessary

const JournalDetails = () => {
  return (
    <div className="hero-container">
      <div className="left-column">
        {/* Image Carousel */}
        <Carousel controls={false}>
          {" "}
          {/* Disable controls */}
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
          </Carousel.Item>
        </Carousel>
        <div className="contact-details">
          <h3>Contact Person and Designation:</h3>
          <p>Dr. NILESH B. GAJJAR</p>
          <p>
            <strong>(Chairman: RAJMR)</strong>
          </p>
        </div>
      </div>

      <div className="right-column">
        <h1>Materials and Processing</h1>
        <h2>A journal from ASM India National Council (INC)</h2>
        <p>
          <strong>Year of Start:</strong> October 2023
        </p>
        <p>
          <strong>Frequency:</strong>Biannually
        </p>
        <p>
          <strong>Version:</strong> Electronic and Print
        </p>
        <p>
          <strong>Subject:</strong> Education
        </p>
        <p>
          <strong>Language of Publish:</strong> English
        </p>

        <h2>About The Journal:</h2>
        <p>
          IMaterials and Processing A journal from ASM India National Council
          (INC) is a biannual open access research journal. Materials and
          Processing journal features peer reviewed original research articles,
          technical papers, reviews, case studies, and short communications that
          contribute to the understanding and advancement of Engineering and
          manufacturing processes field for the publishing in this journal at a
          global level as well as print materials.
        </p>
        <p>
          This journal invites articles high quality as well as scientific
          research work from Original research, Case studies and Technical
          papers discussing best industrial practices to provide the a platform
          for students, academicians, scholars, industrialists, researchers, and
          practitioners to share their latest findings, innovative ideas, and
          critical insights after peer review.
        </p>

        <h2>Publisher Name:</h2>
        <p>ASM India National Council Trust</p>

        <h3>Address:</h3>
        <p>
          Process pump (I) Pvt. Ltd. Plot No. 86, Phase 3, Peenya, Bengaluru,
          Karnataka 560058
        </p>

        <h3>Submission E-mail:</h3>
        <p>asmincjournal@gmail.com</p>

        <h3>Web site:</h3>
        <p>
          <a
            href="http://www.asme.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.asme.....
          </a>
        </p>
      </div>
    </div>
  );
};

export default JournalDetails;
