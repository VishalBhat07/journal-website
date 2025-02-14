import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AuthorGuidelines.css";
import guidelines from "../Guidelines/guidelines.json";
import responsibilities from "../Guidelines/responsibilities.json";

const AuthorGuidelines = () => {
  // Function to create accordion JSX
  const createAccordion = (data, parentId) => {
    return data.map((item, index) => (
      <div className="accordion-item" key={index}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${parentId}${index}`} // Unique ID for each collapse
            aria-expanded="false"
            aria-controls={`collapse${parentId}${index}`}
          >
            <strong>{item.title}</strong>
          </button>
        </h2>
        <div
          id={`collapse${parentId}${index}`} // Unique ID for each collapse
          className="accordion-collapse collapse"
          data-bs-parent={`#${parentId}`} // Correct parent ID reference
        >
          <div className="accordion-body">
            {Array.isArray(item.content) ? (
              item.content.map((contentItem, contentIndex) => (
                <div key={contentIndex}>{contentItem}</div> // Each content in its own div
              ))
            ) : (
              <div>{item.content}</div> // Handle non-array content
            )}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="author-guidelines" style={{ padding: "20px" }}>
      <h3 className="text-center font-weight-bold">
        Author Guidelines and Responsibilities
      </h3>
      <div>
        <p>
          <strong>Materials and Processing, </strong>a journal by the ASM India,
          invites submissions of original research articles, technical papers,
          reviews, case studies, and short communications that contribute to the
          understanding and advancement of engineering and manufacturing
          processes. The journal aims to provide a platform for students,
          academicians, scholars, industrialists, researchers, and practitioners
          to share their latest findings, innovative ideas, and critical
          insights in the field of engineering and manufacturing processes.
        </p>
      </div>
      <div className="accordions-container d-flex flex-wrap">
        <div className="accordion-section">
          <h4>
            <strong>Guidelines</strong>
          </h4>
          <div className="accordion" id="guidelinesAccordion">
            {createAccordion(guidelines, "guidelinesAccordion")}
          </div>
        </div>
        <div className="accordion-section">
          <h4>
            <strong>Responsibilities</strong>
          </h4>
          <div className="accordion" id="responsibilitiesAccordion">
            {createAccordion(responsibilities, "responsibilitiesAccordion")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
