import React from "react";
import "./JournalCard.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const JournalDetails = () => {
  return (
    <div className="journal-hero-container">
      <div className="journal-left-column">
        <ImageCarousel />
        <div className="journal-contact-details">
          <h3 className="journal-section-title">Editor:</h3>
          <p className="journal-contact-info">Ajith Kumar: 9944452591</p>

          <h3 className="journal-section-title">Associate Editors:</h3>
          <p className="journal-contact-info">Dr. Gangadhar Angadi: 8105888568</p>
          <p className="journal-contact-info">Dr. Nataraj J R: 9901150505</p>
        </div>
      </div>

      <div className="journal-right-column">
        <h1 className="journal-title">Materials and Processing</h1>
        <h2 className="journal-subtitle">A journal from ASM India National Council (INC)</h2>
        <p><strong>Year of Start:</strong> October 2023</p>
        <p><strong>Frequency:</strong> Biannually</p>
        <p><strong>Version:</strong> Electronic and Print</p>
        <p><strong>Subject:</strong> Education</p>
        <p><strong>Language of Publish:</strong> English</p>

        <h2 className="journal-about-title">About The Journal:</h2>
        <p className="journal-description">
          Materials and Processing, a journal from ASM India National Council
          (INC), is a biannual open access research journal featuring peer-reviewed
          original research articles, technical papers, reviews, case studies, and
          short communications contributing to the understanding and advancement of
          engineering and manufacturing processes globally.
        </p>
        <p className="journal-description">
          This journal invites high-quality scientific research, case studies, and technical
          papers discussing industrial practices, providing a platform for students, academicians,
          scholars, industrialists, researchers, and practitioners to share findings, ideas,
          and critical insights.
        </p>

        <h2 className="journal-publisher-title">Publisher Name:</h2>
        <p>ASM India National Council Trust</p>

        <h3 className="journal-section-title">Address:</h3>
        <p>Process pump (I) Pvt. Ltd. Plot No. 86, Phase 3, Peenya, Bengaluru, Karnataka 560058</p>

        <h3 className="journal-section-title">Submission E-mail:</h3>
        <p>asmincjournal@gmail.com</p>

        <h3 className="journal-section-title">Website:</h3>
        <p>
          <a
            href="https://journal-website-test.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="journal-website-link"
          >
            www.asm.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default JournalDetails;
