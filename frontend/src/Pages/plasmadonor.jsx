import React, { useEffect, useState } from "react";
import PageNavbar from "../components/Navbar/PageNavbar";
import Footer from "../components/Footer/Footer";
// import Navbar from '../components/Navbar/Navbar'
import moment from "moment";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Domain } from "../Constants/Domain";
const PlasmaDonorList = () => {
  const [loading, setLoading] = useState(false);
  const [plasma, setPlasma] = useState([]);

  useEffect(() => {
    async function getPlasma() {
      await fetch(Domain + "Plasma", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((jsonData) => {
          setLoading(false);
          console.log("hospital bed data");
          setPlasma(jsonData.data);
        });
    }
    getPlasma();
  }, []);

  return (
    <div className="plasmadonorlist">
      <PageNavbar />
      <div className="container pt-5">
        <p className="display-6 fw-bold m-auto">Available Plasma Donors</p>
        <br />
        <p className="lead m-auto">
          List of individuals willing to donate their plasma!
        </p>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-4 p-3">
            <a
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Your City from the dropdown
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <a className="dropdown-item active" href="#">
                  Mumbai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Delhi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Bangalore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ahmedabad
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hyderabad
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Chennai
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Kolkata
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Surat
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Pune
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Jaipur
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Lucknow
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Indore
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Thane
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Agra
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Ghaziabad
                </a>
              </li>
            </ul>

            <a
              className="btn btn-outline-danger"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              href="#"
              id="refresh-button"
              role="button"
            >
              Refresh Page
            </a>
          </div>
        </div>
      </div> */}

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Page Status
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Page Refreshed...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="table-responsive">
          <table className="table table-hover table-bordered border-danger">
            <thead
              className="table text-white"
              style={{ "background-color": "	#0d6efd" }}
            >
              <th>Name</th>
              <th>Phone No</th>
              <th>City</th>
              <th>Address</th>
              <th>Vaccine Date (COVID)</th>
              <th>Blood Group</th>
              {/* <th>Date Submitted</th> */}
            </thead>

            <tbody>
              {plasma.map((singlePlasma) => (
                <tr>
                  <td>{singlePlasma.Name}</td>
                  <td>{singlePlasma.Phone_no}</td>
                  <td>{singlePlasma.City}</td>
                  <td>{singlePlasma.Address}</td>
                  <td>{singlePlasma.DOB}</td>
                  <td>{singlePlasma.Blood_group}</td>
                  {/* <td>
                    {moment(singlePlasma.createdAt).format("MMM DD, YYYY")}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="lead mt-5">
          To Share your own or any other Plasma Donor's information
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
          <Link
            to="/plasmadonorcontact"
            className="btn btn-primary mb-5"
            role="button"
          >
            Click Here to ADD Information about Plasma Donor
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlasmaDonorList;
