import React, { useEffect, useState } from "react";
import { Domain } from "../Constants/Domain";
import PageNavbar from "../components/Navbar/PageNavbar";
import Footer from "../components/Footer/Footer";
import moment from "moment";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Hospitalbeds = () => {
  const [loading, setLoading] = useState(false);
  const [bedsData, setBedsData] = useState([]);

  useEffect(() => {
    async function getHospitalBeds() {
      await fetch(Domain + "Hospital", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((jsonData) => {
          setLoading(false);
          console.log("hospital bed data");
          setBedsData(jsonData.data);
        });
    }
    getHospitalBeds();
  }, []);
  return (
    <div className="hospitalbeds">
      <PageNavbar />
      <div className="container pt-5">
        <p className="display-6 fw-bold m-auto">
          Available Hospital (ICU and OXYGEN) Beds
        </p>
        <br />
        <p className="lead m-auto">
          Listof hospitals equipped with beds for accommodating patients.
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
              style={{ "background-color": " #650013" }}
            >
              <th>Hospital Name</th>
              <th>Contact Name</th>
              <th>Phone No</th>
              <th>Address</th>
              <th>City</th>
              <th>ICU Beds</th>
              <th>OXYGEN Beds</th>
              {/* <th>Time Submitted</th> */}
            </thead>

            <tbody>
              {bedsData.map((bed) => (
                <tr>
                  <td>{bed.Hospital_Name}</td>
                  <td>{bed.Contact_Name}</td>
                  <td>{bed.Phone_no}</td>
                  <td>{bed.Address}</td>
                  <td>{bed.City}</td>
                  <td>{bed.ICU_Beds}</td>
                  <td>{bed.Oxygen_Beds}</td>
                  {/* <td>{moment(bed.createdAt).format("MMM DD, YYYY")}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="lead mt-5">
          To Share any Information related to Available Hospital Beds
        </p>

        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
          <Link
            to="/hospitalbedcontact"
            className="btn btn-secondary mb-5"
            role="button"
          >
            Click Here to ADD Information about Hospital Beds
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hospitalbeds;
