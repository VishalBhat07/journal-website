import React from "react";
import "./QuickLinks.css"; // Make sure to create a CSS file for styles
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <strong>
            <Link to="/">Home</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/about/academic-benefits">Academic Benefits</Link>
          </strong>
        </li>
        <li>
        <li>
          <strong>
            <Link to="/about/industry-benefits">Benefits to Industry</Link>
          </strong>
        </li>
          <strong>
            <Link to="/author/author-guidelines">Author Guidelines and Responsibilities</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/author/peer-review-process">Peer Review Process</Link>
          </strong>
        </li>

        <li>
          <strong>
            <Link to="/author/board-of-member">Board of Member</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/author/call-for-paper">Call for Paper</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/author/author-guidelines">Advertisement Tariff</Link>
          </strong>
        </li>

      </ul>
    </div>
  );
};

export default QuickLinks;
