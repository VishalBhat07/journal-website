import React from "react";
import "./Flowchart.css";

const Flowchart = () => {
  return (
    <div className="flowchart">
      <div className="column">
        <div className="box">Publication Process</div>
        <div className="arrow">↓</div>
        <div className="box">Initial Submission and Editorial Check</div>
        <div className="arrow">↓</div>
        <div className="box">Plagiarism Check</div>
        <div className="arrow">↓</div>
        <div className="box">Assignment to an Editor</div>
        <div className="arrow">↓</div>
        <div className="box">Selection of Reviewers</div>
        <div className="arrow">↓</div>
      </div>

      <div className="column">
        <div className="arrow">↓</div>
        <div className="box">Peer Review Process</div>
        <div className="arrow">↓</div>
        <div className="box">Reviewer's Decision and Recommendations</div>
        <div className="arrow">↓</div>
        <div className="box">Editorial Decision</div>
        <div className="arrow">↓</div>
        <div className="box">Accept Revised Manuscript</div>
        <div className="arrow">↓</div>
      </div>

      <div className="column">
        <div className="arrow">↓</div>
        <div className="box">Revision Process</div>
        <div className="arrow">↓</div>
        <div className="box">Accepted Manuscript</div>
        <div className="arrow">↓</div>
        <div className="box">Final Decision</div>
        <div className="arrow">↓</div>
        <div className="box">Proofreading and Publication</div>
        <div className="arrow">↓</div>
        <div className="box">Post-Publication</div>
      </div>
    </div>
  );
};

export default Flowchart;
