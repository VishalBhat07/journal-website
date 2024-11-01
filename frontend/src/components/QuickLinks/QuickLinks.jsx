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
            <Link to="/author/author-guidelines">Author Guidelines</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/author/author-guidelines">Benefits to Industry</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/author/author-guidelines">Board of Member</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link to="/author/author-guidelines">Call for Paper</Link>
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
