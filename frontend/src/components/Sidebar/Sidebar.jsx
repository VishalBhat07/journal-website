import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isLoggedIn }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "230px", height: "100vh" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item dropdown">
          <Link to="/" className="nav-link active">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            Home
          </Link>
        </li>

        <li className="nav-item dropdown">
          <Link
            to="#"
            className="nav-link link-dark dropdown-toggle"
            id="dashboardDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            About
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
            <li>
              <Link className="dropdown-item" to="/about/academic-benefits">
                Academic Benefits
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about/industry-benefits">
                Industry Benefits
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/about/board-of-member">
                Board of Member
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link
            to="#"
            className="nav-link link-dark dropdown-toggle"
            id="dashboardDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Authors Section
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
            <li>
              <Link className="dropdown-item" to="/author/author-guidelines">
                Author Guidelines
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/author/author-responsibilities"
              >
                Author Responsibilities
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/author/peer-review-process">
                Peer Review Process
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link
            to={isLoggedIn ? "/upload-article" : "/uploads" }
            className="nav-link link-dark dropdown-toggle"
            id="dashboardDropdown"
            role="button"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Upload Article
          </Link>
        </li>

        <li className="nav-item dropdown">
          <Link
            to="/uploads"
            className="nav-link link-dark dropdown-toggle"
            id="dashboardDropdown"
            role="button"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Uploads
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
