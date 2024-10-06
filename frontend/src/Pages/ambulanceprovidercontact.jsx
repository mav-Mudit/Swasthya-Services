import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import PageNavbar from "../components/Navbar/PageNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Ambulanceprovidercontact = () => {
  const [driver, setDriver] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [ambulance, setAmbulance] = useState("");
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = {
      Driver_Name: driver,
      Phone_no: phone,
      City: city,
      Address: address,
      Ambulance_no: ambulance,
    };
    try {
      // Send data to server
      const res = await axios.post("http://localhost:5000/api/Ambulance", Data);

      // Log the response
      console.log(res.data);

      // Show update alert
      setShowUpdateAlert(true);

      // Reset form fields
      setDriver("");
      setPhone("");
      setAddress("");
      setCity("");
      setAmbulance("");

      // Hide update alert after 3 seconds
      setTimeout(() => {
        setShowUpdateAlert(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ambulanceprovidercontact">
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
          className="border border-danger border-4 rounded-3 p-4 mb-5"
          onSubmit={handleSubmit}
        >
          <h1 className="display-6 fw-bold mark text-center mb-5">
            Add a Ambulance Provider Contact
          </h1>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Driver Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={driver}
              onChange={(e) => {
                setDriver(e.target.value);
              }}
            />
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
              <b>Address *</b>
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

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Ambulance Number *</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="MH-12 AB 1001"
              value={ambulance}
              onChange={(e) => {
                setAmbulance(e.target.value);
              }}
            />
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
            to="/ambulanceprovider"
            className="d-grid gap-2 col-12 mx-auto w-80 btn btn-danger"
            role="button"
          >
            View All Ambulance Service Providers
          </Link>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Ambulanceprovidercontact;
