import React from "react";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "220px", height: "100vh" }}
    >

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link active dropdown-toggle"
            id="homeDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
          <ul className="dropdown-menu" aria-labelledby="homeDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Overview
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Updates
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link link-dark dropdown-toggle"
            id="dashboardDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Dashboard
          </a>
          <ul className="dropdown-menu" aria-labelledby="dashboardDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Analytics
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Reports
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link link-dark dropdown-toggle"
            id="ordersDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table" />
            </svg>
            Orders
          </a>
          <ul className="dropdown-menu" aria-labelledby="ordersDropdown">
            <li>
              <a className="dropdown-item" href="#">
                New Order
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Order History
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link link-dark dropdown-toggle"
            id="productsDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#grid" />
            </svg>
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="productsDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Add Product
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Manage Products
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            href="#"
            className="nav-link link-dark dropdown-toggle"
            id="customersDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            Customers
          </a>
          <ul className="dropdown-menu" aria-labelledby="customersDropdown">
            <li>
              <a className="dropdown-item" href="#">
                New Customer
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Customer List
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
