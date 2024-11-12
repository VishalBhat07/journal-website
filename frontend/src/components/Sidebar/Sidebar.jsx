import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isLoggedIn, onUploadClick , admin}) => {
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
            to="/board-of-member"
            className="nav-link link-dark"
            id="dashboardDropdown"
            role="button"
            aria-expanded="false"
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
            Board of Members
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
            Benefits
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
            <li>
              <Link className="dropdown-item" to="/academic-benefits">
                Academic Benefits
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/industry-benefits">
                Industry Benefits
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
              <Link className="dropdown-item" to="/author-guidelines">
                Guidelines and Responsibilities
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/peer-review-process">
                Publication Process
              </Link>
            </li>
          </ul>
        </li>
        {
        admin ? (<li className="nav-item dropdown">
              <Link
            to="/uploads"
            className="nav-link link-dark"
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
            Current Issue
          </Link>
        </li>) : <></>
      } 

  <li className="nav-item dropdown">
          <button
            className="nav-link link-dark"
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
            className="nav-link link-dark"
            style={{ fontWeight: "bold", color: "#007BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0056b3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#007BFF")}
          >
            Previous Issues
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
            Advertisement
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
            <li>
              <Link className="dropdown-item" to="/bank-details">
                Bank Details
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/advertisement-tariff">
                Advertisement Tariff
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
