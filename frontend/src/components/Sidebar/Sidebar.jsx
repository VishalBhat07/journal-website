import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isLoggedIn, onUploadClick }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "230px", height: "123.3vh" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item dropdown">
          <Link
            to="/"
            className="nav-link active"
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
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
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
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
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
            Authors Section
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
            <li>
              <Link className="dropdown-item" to="/author/author-guidelines">
                Guidelines and Responsibilities
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/author/peer-review-process">
                Publication Process
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/author/advertisement-tariff"
              >
                Advertisement Tariff
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <button
            className="nav-link link-dark dropdown-toggle"
            style={{
              fontWeight: "bold",
              color: "#007BFF",
              background: "none",
              border: "none",
              textAlign: "left",
            }}
            onClick={onUploadClick} // Trigger the upload popup
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
            Upload Article
          </button>
        </li>

        <li className="nav-item dropdown">
          <Link
            to="/uploads"
            className="nav-link link-dark dropdown-toggle"
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
            Uploads
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
