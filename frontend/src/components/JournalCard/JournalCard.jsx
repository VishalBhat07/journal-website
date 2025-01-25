import React from "react";
import styles from "./JournalCard.module.css"; // Import the CSS Module
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const JournalDetails = () => {
  return (
    <div className={styles['journal-hero-container']}>
      <div className={styles['journal-left-column']}>
        <ImageCarousel />
        <div className={styles['journal-contact-details']}>
          <h3 className={styles['journal-section-title']}>Editor:</h3>
          <p className={styles['journal-contact-info']}>Ajith Kumar: 9944452591</p>

          <h3 className={styles['journal-section-title']}>Associate Editors:</h3>
          <p className={styles['journal-contact-info']}>Dr. Gangadhar Angadi: 8105888568</p>
          <p className={styles['journal-contact-info']}>Dr. Nataraj J R: 9901150505</p>
        </div>
      </div>

      <div className={styles['journal-right-column']}>
        <h1 className={styles['journal-title']}>Materials and Processing</h1>
        <h2 className={styles['journal-subtitle']}>
          A journal from ASM India National Council Trust (INC)
        </h2>

        <div style={{ lineHeight: "1.2", marginBottom: "10px" }}>
          <p className={styles['journal-data-headers']}>
            <strong>Year of Start:</strong> October 2023
          </p>
          <p className={styles['journal-data-headers']}>
            <strong>Frequency:</strong> Biannually
          </p>
          <p className={styles['journal-data-headers']}>
            <strong>Version:</strong> Electronic and Print
          </p>
          <p className={styles['journal-data-headers']}>
            <strong>Subject:</strong> Education
          </p>
          <p className={styles['journal-data-headers']}>
            <strong>Language of Publish:</strong> English
          </p>
        </div>

        <h2 className={styles['journal-about-title']}>About The Journal:</h2>
        <p className={styles['journal-description']} style={{ fontStyle: "italic" }}>
          Materials and Processing, a journal from ASM India National Council Trust
          (INC), is a biannual open access research journal featuring peer-reviewed
          original research articles, technical papers, reviews, case studies, and
          short communications contributing to the understanding and advancement of
          engineering and manufacturing processes globally.
        </p>
        <p className={styles['journal-description']} style={{ fontStyle: "italic" }}>
          This journal invites high-quality scientific research, case studies, and technical
          papers discussing industrial practices, providing a platform for students, academicians,
          scholars, industrialists, researchers, and practitioners to share findings, ideas,
          and critical insights.
        </p>

        <h2 className={styles['journal-publisher-title']}>Publisher Name:</h2>
        <p>ASM India National Council Trust</p>

        <h3 className={styles['journal-section-title']}>Submission E-mail:</h3>
        <p>asmincjournal@gmail.com</p>

        <h3 className={styles['journal-section-title']}>Website:</h3>
        <p>
          <a
            href="http://www.asmblrchapter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles['journal-website-link']}
          >
            www.asmblrchapter.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default JournalDetails;