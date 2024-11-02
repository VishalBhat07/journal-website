import React from 'react';
import './IndustryBenefits.css'; // Ensure you have the CSS file for styling
import industryBenefits from './IndustryBenefits.json';
const IndustryBenefits = () => {
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
    <div className="industry-benefits">
        <h3><strong>Industry Benefits</strong></h3>
        <div className="accordion" id="industryBenefitsAccordion">
            {createAccordion(industryBenefits, 'industryBenefits')}
        </div>
    </div>
  );

};

export default IndustryBenefits;
