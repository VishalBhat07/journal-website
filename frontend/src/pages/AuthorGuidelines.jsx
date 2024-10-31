import React from 'react';

const AuthorGuidelines = () => {
  return (
    <div className="container mt-5">
      <h2>Authors Guidelines and Responsibilities</h2>
      <div className="accordion" id="guidelinesAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Overview
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#guidelinesAccordion"
          >
            <div className="accordion-body">
              Materials and Processing, a journal by the ASM India National Council Trust (INC), invites submissions of original research articles, technical papers, reviews, case studies, and short communications that contribute to the understanding and advancement of engineering and manufacturing processes. The journal aims to provide a platform for students, academicians, scholars, industrialists, researchers, and practitioners to share their latest findings, innovative ideas, and critical insights in the field of engineering and manufacturing processes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Manuscript Guidelines
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#guidelinesAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li><strong>Language:</strong> All submissions must be written in English, formatted on standard A4-sized paper, in a double-column layout using 12-point Times New Roman font.</li>
                <li><strong>Abstract:</strong> Each manuscript must include an abstract of 150 to 250 words, avoiding undefined abbreviations or unspecified references, and clearly present the objectives, methodology, results, and significance of the research.</li>
                <li><strong>Keywords:</strong> Provide five keywords for indexing purposes, placed after the abstract.</li>
                <li><strong>Manuscript Length:</strong> Manuscripts should be between 4 and 8 pages in length.</li>
                <li><strong>File Format:</strong> Manuscripts should be prepared in MS Word format and saved as either a docx file (Word 2007 or higher) or a doc file (older versions). PDF submissions are not accepted.</li>
                <li><strong>Headings:</strong> Avoid using more than three levels of displayed headings.</li>
                <li><strong>Mathematical Notation:</strong> Italicize single letters that denote mathematical constants, variables, and unknown quantities.</li>
                <li><strong>Equations:</strong> Equations should be left-aligned and numbered consecutively.</li>
                <li><strong>Tables:</strong> Number tables using Arabic numerals and cite them in consecutive order within the text. Each table must include a title and, if applicable, a reference to the original source if previously published material is used.</li>
                <li><strong>Figures:</strong> Figures should also be numbered using Arabic numerals and cited in consecutive order within the text. Use lowercase letters (a, b, c, etc.) to denote different parts of a figure. Provide a title for each figure explaining its components.</li>
                <li><strong>References:</strong> Only include works cited in the text that have been published or accepted for publication.</li>
                <li><strong>Conclusions:</strong> Clearly state the most significant findings of the paper and their practical implications.</li>
                <li><strong>Acknowledgments:</strong> Acknowledgments for individuals, grants, or funding sources should be included in a separate section on the title page. Funding organizations must be written out in full.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Review Process
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#guidelinesAccordion"
          >
            <div className="accordion-body">
              The reviewers' decisions are final, and any attempts at canvassing will disqualify the author(s) from future submissions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorGuidelines;
