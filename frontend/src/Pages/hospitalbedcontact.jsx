import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import PageNavbar from "../components/Navbar/PageNavbar";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Hospitalbedcontact = () => {
  const [hospital, setHospital] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [icu, setIcu] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [contact, setContact] = useState("");
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = {
      Hospital_Name: hospital,
      Contact_Name: contact,
      Phone_no: phone,
      City: city,
      Address: address,
      ICU_Beds: icu,
      Oxygen_Beds: oxygen,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/Hospital", Data);
      console.log(res.data);

      // Show update alert
      setShowUpdateAlert(true);

      // Reset form fields
      setHospital("");
      setContact("");
      setPhone("");
      setAddress("");
      setCity("");
      setIcu("");
      setOxygen("");

      // Hide update alert after 3 seconds
      setTimeout(() => {
        setShowUpdateAlert(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hospitalbedcontact">
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
          className="border border-secondary border-4 rounded-3 p-4 mb-5"
          onSubmit={handleSubmit}
        >
          <h1 className="display-6 fw-bold mark text-center mb-5">
            Share Information About Available Hospital Beds
          </h1>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Hospital Name *</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={hospital}
              onChange={(e) => {
                setHospital(e.target.value);
              }}
            />
          </div>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Contact Person Name *</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
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
              <b>Address</b>
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
            <label for="inputState" className="form-label">
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
              <b>Number of ICU Beds Available *</b>
            </label>
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Only Digits..."
              value={icu}
              onChange={(e) => {
                setIcu(e.target.value);
              }}
            />
          </div>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Number of OXYGEN Beds Available *</b>
            </label>
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              placeholder="Only Digits..."
              value={oxygen}
              onChange={(e) => {
                setOxygen(e.target.value);
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
            to="/hospitalbeds"
            className="d-grid gap-2 col-12 mx-auto w-80 btn btn-secondary"
            role="button"
          >
            View All Available Hospitals
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Hospitalbedcontact;
