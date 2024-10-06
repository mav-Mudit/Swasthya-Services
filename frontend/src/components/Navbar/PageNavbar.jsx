import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const PageNavbar = () => {
  return (
    <div className="pagenavbar">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        id="navbar"
        style={{ backgroundColor: "	#0d6efd" }}
      >
        <div className="container-fluid">
          {/* <Link to="/" className="navbar-brand" href="#">
                <div className="logo-container">
                    Covid Relief
                </div>
            </Link> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse m-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item m-1 pb-1 ">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="./index.html"
                >
                  <span className="material-icons">home</span>
                  Home
                </Link>
              </li>
              <li className="nav-item m-1 pb-1 ">
                <Link
                  to="/plasma"
                  className="nav-link active"
                  aria-current="page"
                  href="./plasma-donors-list-page.html"
                >
                  <span className="material-icons">bloodtype</span>
                  Plasma Donors
                </Link>
              </li>
              <li className="nav-item m-1 pb-1 ">
                <Link
                  to="/hospitalbeds"
                  className="nav-link active"
                  aria-current="page"
                  href="./hospital-beds-list-page.html"
                >
                  <span className="material-icons">local_hospital</span>
                  Hospital Beds
                </Link>
              </li>
              <li className="nav-item m-1 pb-1 ">
                <Link
                  to="/oxygensupply"
                  className="nav-link active"
                  aria-current="page"
                  href="./oxygen-suppliers-list-page.html"
                >
                  <span className="material-icons">air</span>
                  Oxygen Suppliers
                </Link>
              </li>
              <li className="nav-item m-1 pb-1 ">
                <Link
                  to="/medssupply"
                  className="nav-link active"
                  aria-current="page"
                  href="./meds-injection-suppliers-list-page.html"
                >
                  <span className="material-icons">medication</span>
                  Meds Suppliers
                </Link>
              </li>
              <li className="nav-item m-1 pb-1 ">
                <Link
                  to="/ambulanceprovider"
                  className="nav-link active"
                  aria-current="page"
                  href="./ambulance-providers-list-page.html"
                >
                  <span className="material-icons">airport_shuttle</span>
                  Ambulance Providers
                </Link>
              </li>
              {/* <li className="nav-item m-1 pb-1 ">
                        <a className="nav-link active" aria-current="page" href="./tiffin-service-list-page.html">
                            <span className="material-icons">takeout_dining</span>
                            Tiffin Service
                        </a>
                    </li> */}

              <li className="nav-item dropdown m-1 pb-1">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="material-icons">more_vert</span>
                  More Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      to="/resourcespage"
                      className="dropdown-item"
                      target="_parent"
                    >
                      All Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/helplines"
                      className="dropdown-item"
                      target="_parent"
                    >
                      Helplines
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/instagramresources"
                      className="dropdown-item"
                      target="_parent"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PageNavbar;
