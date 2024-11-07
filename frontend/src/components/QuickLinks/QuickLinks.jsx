import React from "react";
import "./QuickLinks.css"; // Make sure to create a CSS file for styles
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h2 className="animated-header">
        <strong>Quick Links</strong>
      </h2>
      <ul>
        <li>
          <strong>
            <Link to="/">Home</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/academic-benefits">Academic Benefits</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/industry-benefits">Industry Benefits</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/uploads">Previous Issues</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/peer-review-process">Publication Process</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/board-of-member">Board of Members</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/call-for-paper">Call for Paper</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/advertisement-tariff">Advertisement Tariff</Link>
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
