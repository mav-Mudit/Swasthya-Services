import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer/Footer";
import PageNavbar from "../components/Navbar/PageNavbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Plasmadonorcontact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [blood, setBlood] = useState("");
  const [pincode, setPincode] = useState("");
  const [dob, setDob] = useState("");
  const [alt, setAlt] = useState("");
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = {
      Name: name,
      Phone_no: phone,
      City: city,
      Address: address,
      DOB: dob,
      Pincode: pincode,
      Blood_group: blood,
      Alternate_phone: alt,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/plasma", Data);
      console.log(res.data);

      // Show update alert
      setShowUpdateAlert(true);

      // Reset form fields
      setName("");
      setPhone("");
      setAddress("");
      setCity("");
      setBlood("");
      setPincode("");
      setDob("");
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
    <div className="plasmadonorcontact">
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
      <div className="container mt-5 p-4 shadow-lg">
        <form
          className="border border-primary border-4 rounded-3 p-4 mb-5"
          onSubmit={handleSubmit}
        >
          <h1 className="display-6 fw-bold mark text-center mb-5">
            Add Yourself as a Plasma Donor
          </h1>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Name *</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Your Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setAlt(e.target.value)}
            />
          </div>

          <div className="form mb-4">
            <label for="inputState" className="form-label p-1">
              <b>Blood Group *</b>
            </label>
            <select
              id="inputState"
              className="form-select"
              value={blood}
              onChange={(e) => setBlood(e.target.value)}
            >
              <option selected>Select your Blood Group</option>
              <option>A +</option>
              <option>A -</option>
              <option>B +</option>
              <option>B -</option>
              <option>O +</option>
              <option>O -</option>
              <option>AB +</option>
              <option>AB -</option>
            </select>
          </div>

          <div className="form mb-4">
            <label for="floatingInput" className="p-1">
              <b>Select the date you got COVID vaccine (ignore,if not)</b>
            </label>
            <input
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="Pick Date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
              onChange={(e) => setAddress(e.target.value)}
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
              onChange={(e) => setCity(e.target.value)}
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
              <b>Pin Code</b>
            </label>
            <input
              type="text"
              maxlength="6"
              className="form-control"
              id="floatingInput"
              placeholder="6 Digits only..."
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
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
            style={{ backgroundColor: " #650013" }}
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
            to="/plasma"
            className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary"
            role="button"
          >
            View All Plasma Donors
          </Link>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Plasmadonorcontact;
