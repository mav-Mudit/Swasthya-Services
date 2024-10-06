import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import PageNavbar from "../components/Navbar/PageNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Medssuppliercontact = () => {
  const [medicine, setMedicine] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [alt, setAlt] = useState("");
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = {
      Medicine: medicine,
      Phone_no: phone,
      City: city,
      Address: address,
      Alt_Phone: alt,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/Meds", Data);
      console.log(res.data);

      // Show update alert
      setShowUpdateAlert(true);

      // Reset form fields
      setMedicine("");
      setPhone("");
      setAddress("");
      setCity("");
      setAlt("");

      // Hide update alert after 3 seconds
      setTimeout(() => {
        setShowUpdateAlert(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="medssuppliercontact">
      <PageNavbar />
      {showUpdateAlert && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Data submitted successfully!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="container mt-5 p-4">
        <form
          className="border border-success border-4 rounded-3 p-4 mb-5"
          onSubmit={handleSubmit}
        >
          <h1 className="display-6 fw-bold mark text-center mb-5">
            Add a Meds/Injection Supplier Contact
          </h1>

          <div className="form mb-4">
            <label htmlFor="inputState" className="form-label">
              <b>Medicine / Injection</b>
            </label>
            <select
              id="inputState"
              className="form-select p-2"
              value={medicine}
              onChange={(e) => {
                setMedicine(e.target.value);
              }}
            >
              <option selected>
                Select the Medicine / Injection that you Provided
              </option>
              <option>Remdesivir</option>
              <option>Fabiflu</option>
              <option>Favipiravir</option>
              <option>Tocilizumab</option>
              <option>All COVID-19 Medicines</option>
              <option>Vaccine</option>
            </select>
          </div>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Phone Number *</b>
            </label>
            <input
              type="text"
              maxlength="10"
              className="form-control"
              id="floatingInput"
              placeholder="10 Digits only..."
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Alternate Phone Number</b>
            </label>
            <input
              type="text"
              maxlength="10"
              className="form-control"
              id="floatingInput"
              placeholder="Secondary Mobile No..."
              value={alt}
              onChange={(e) => {
                setAlt(e.target.value);
              }}
            />
          </div>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Address (optional)</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="New Sangvi, Pune"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>

          <div className="form mb-4">
            <label for="inputState" className="form-label p-1">
              <b>Choose your City *</b>
            </label>
            <select
              id="inputState"
              className="form-select p-2"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <option selected>Select City</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Ahmedabad</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Kolkata</option>
              <option>Surat</option>
              <option>Pune</option>
              <option>Jaipur</option>
              <option>Lucknow</option>
              <option>Indore</option>
              <option>Thane</option>
              <option>Agra</option>
              <option>Ghaziabad</option>
            </select>
          </div>

          <div className="form-check mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" for="invalidCheck">
              I hereby Agree to Terms and Conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>

          <button
            className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary mb-3 border border-none"
            href="#"
            role="button"
            type="submit"
            style={{ "background-color": "#650013" }}
          >
            Submit
          </button>
          {showUpdateAlert && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              Data submitted successfully!
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>
          )}

          <Link
            to="/medssupply"
            className="d-grid gap-2 col-12 mx-auto w-80 btn btn-success"
            role="button"
          >
            View All Meds/Injection Suppliers
          </Link>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Medssuppliercontact;
