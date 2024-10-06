import React, { useState } from "react";
import axios from "axios";
import PageNavbar from "../components/Navbar/PageNavbar";
import Footer from "../components/Footer/Footer";

const VolunteerPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = {
      Name: name,
      Phone: phone,
      Email: email,
      City: city,
    };

    try {
      await axios.post("http://localhost:5000/api/volunteer", data);
      alert("Thank you for volunteering!");
      setName("");
      setPhone("");
      setEmail("");
      setCity("");
    } catch (error) {
      console.error(error);
      alert("Failed to submit volunteer application. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="volunteerpage">
      <PageNavbar />
      <div className="px-4 py-5">
        <h1 className="display-5 fw-bold text-center pb-2">
          Join Us to Help People :)
        </h1>
        <div className="col-lg-9 mx-auto text-center">
          <p className="lead mb-4">
            We are very grateful that you want to take out time and volunteer to
            help us out. The Duties of the Volunteer will include tasks like
            Verifying the Details added to the website and also constantly keep
            updating the details and sharing this website to more and more
            people.
          </p>
        </div>
        <div className="container col-lg-6 mt-5 p-4">
          <form
            className="border border-danger border-4 rounded-3 p-4"
            onSubmit={handleSubmit}
          >
            <h1 className="h3 fw-normal mark text-center mb-5">
              Fill the form to apply as a Volunteer from Home
            </h1>

            <div className="form mb-4">
              <label htmlFor="name" className="p-1">
                <b>Your Name</b>
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Your Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form mb-4">
              <label htmlFor="phone" className="p-1">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                id="phone"
                maxLength="10"
                className="form-control"
                placeholder="10 Digits only..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="form mb-4">
              <label htmlFor="email" className="p-1">
                <b>Email Address</b>
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form mb-5">
              <label htmlFor="city" className="form-label">
                <b>Choose your City *</b>
              </label>
              <select
                id="city"
                className="form-select p-2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Select City</option>
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

            <button
              className="d-grid gap-2 col-12 mx-auto w-80 btn btn-primary mb-3 border border-none"
              type="submit"
              style={{ backgroundColor: "#650013" }}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteerPage;
