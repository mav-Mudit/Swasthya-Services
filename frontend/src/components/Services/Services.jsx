import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServiceCard.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import pred from "../../images/predicition.jpg";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container px-4 py-5" id="services">
          <h1 className="display-6 fw-bold lh-1 mb-2 text-center">
            We Help People by Providing various Services
          </h1>
          <hr className="solid" />
          <ServiceCard />
          {/* <ServiceCard title="Hospital Beds" />
          <ServiceCard title="Oxygen Suppliers" />
          <ServiceCard title="Meds Suppliers" />
          <ServiceCard title="EMS Providers" />
          <ServiceCard title="Tiffin Service" /> */}
        </div>
      </div>

      <div className="services">
        <div className="container px-4 py-5" id="services">
          <h1 className="display-6 fw-bold lh-1 mb-2 text-center">
            Predict the disease based on symptoms!
          </h1>
          <br />
          {/* <span
            style={{ fontSize: "10px", color: "red", alignItems: "center" }}
          >
            **Swasthya provides precise results but we encourage you to visit
            the doctor for checkup don't rely on us. You can get appointments
            through our chatbot also.**
          </span> */}

          <div className="pred">
            <div id="left">
              <img
                src={pred}
                style={{ height: "300px", width: "600px" }}
                alt="predimage"
              />
            </div>
            <div id="right">
              <span
                style={{
                  fontSize: "20px",
                  color: "red",
                  margin: "30px",
                  justifyContent: "center",
                }}
              >
                **Swasthya provides precise results but we encourage you to
                visit the doctor for checkup don't rely on us. You can get
                appointments through our chatbot also.**
              </span>
              <button id="btnpred">
                <a
                  className="apred"
                  href="https://swasthyaprediction.streamlit.app/"
                  target="_blank"
                >
                  Use Prediction Tools
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
