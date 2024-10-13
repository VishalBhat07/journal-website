import React from 'react';
import './JournalCard.css';

const JournalDetails = () => {
  return (
    <div className="container">
      <div className="left-column">
        <img
          src="https://via.placeholder.com/300x450"
          alt="IJRE Cover"
          className="journal-cover"
        />
        <div className="contact-details">
          <h3>Contact Person and Designation:</h3>
          <p>Dr. NILESH B. GAJJAR</p>
          <p><strong>(Chairman: RAJMR)</strong></p>
        </div>
      </div>
      
      <div className="right-column">
        <h1>International Journal for Research in Education (IJRE)</h1>
        <p><strong>Year of Start:</strong> December 2012</p>
        <p><strong>Frequency:</strong> Monthly Journal</p>
        <p><strong>ISSN:</strong> (p) 2347-5412 & (o) 2320-091X</p>
        <p><strong>Version:</strong> Electronic and Print</p>
        <p><strong>Subject:</strong> Education</p>
        <p><strong>Language of Publication:</strong> English</p>
        
        <h2>About The Journal</h2>
        <p>
          International Journal for Research in Education (IJRE) is an ISSN 
          International online as well as print Journal. It is also double blind 
          peer-reviewed, Indexed, and Impact Factored Journal since December 2012. 
          In this Journal, Research articles, Research work, and Research projects 
          have been invited from various Educational fields for publishing at a 
          Global level as well as print materials.
        </p>
        <p>
          This Journal invites only high quality as well as scientific Research work 
          from various researchers in the field of Education. The selection criteria 
          of the paper/article are after completion and passed under the peer review process.
        </p>
        
        <h2>Publisher Name:</h2>
        <p>
          RET Academy for International Journals of Multidisciplinary Research 
          (RAIJMR) powered by Rudra Education Trust
        </p>
        
        <h3>Address:</h3>
        <p>
          143 Gokuldham Society, Modhera Road, Dediyasan, District: 
          Mehsana-384002, Gujarat-India.
        </p>
        <p><strong>Mobile:</strong> +91 98249 74994</p>
        
        <h3>Submission E-mail:</h3>
        <p>ret@raijmr.com | editorraijmr@gmail.com</p>
        
        <h3>Submit Your Article Online:</h3>
        <p>
          Click on <strong>‘All Submission Steps’</strong> on the Top Menu Bar
        </p>
        
        <h3>Web site:</h3>
        <p>
          <a href="http://www.raijmr.com" target="_blank" rel="noopener noreferrer">
            www.raijmr.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default JournalDetails;
