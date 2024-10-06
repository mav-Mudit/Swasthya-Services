import React, { useEffect, useState } from "react";
import { Domain } from "../Constants/Domain";
import Footer from "../components/Footer/Footer";
import PageNavbar from "../components/Navbar/PageNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Medssuppliers = () => {
  const [loading, setLoading] = useState(false);
  const [medsData, setMedsData] = useState([]);

  useEffect(() => {
    async function getMeds() {
      await fetch(Domain + "Meds", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((jsonData) => {
          setLoading(false);
          setMedsData(jsonData.data);
        });
    }
    getMeds();
  }, []);
  return (
    <div className="medssuppliers">
      <PageNavbar />
      <div className="container pt-5">
        <p className="display-6 fw-bold m-auto">
          Available Medicine / Injection Suppliers
        </p>
        <br />
        <p className="lead m-auto">
          List of Medicines or Injection Suppliers for the patients in need.
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
                <a class="dropdown-item active" href="#">
                  Mumbai
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Delhi
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Bangalore
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Ahmedabad
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Hyderabad
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Chennai
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Kolkata
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Surat
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Pune
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Jaipur
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Lucknow
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Indore
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Thane
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Agra
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
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
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Page Refreshed...</div>
            <div class="modal-footer">
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
              style={{ backgroundColor: "#650013" }}
            >
              <th>Phone No</th>
              {/* <th>Alternate Phone No</th> */}
              <th>City</th>
              <th>Address</th>
              <th>Medicine / Injection Provided</th>
            </thead>

            <tbody>
              {medsData.map((med) => (
                <tr>
                  <td>{med.Phone_no}</td>
                  {/* <td>{med.Alternate}</td> */}
                  <td>{med.City}</td>
                  <td>{med.Address}</td>
                  <td>{med.Medicine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="lead mt-5">
          To Share any Information related to Available Meds/Injection Suppliers
        </p>

        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-3 mb-3">
          <Link
            to="/medssupplycontact"
            className="btn btn-success mb-5"
            role="button"
          >
            Click Here to ADD Information about Meds/Injection Supplier
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Medssuppliers;
