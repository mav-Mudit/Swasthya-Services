import React from "react";
import staysafe from "../FrontPage/bgswas.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const FrontPage = () => {
  return (
    <div className="frontpage">
      <div className="container-fluid bg-light mb-4">
        <div className="container">
          <div className="row flex-lg-row-reverse flex-md-row-reverse justify-content-end align-items-center py-5">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 pb-5 py-3">
              <img
                src={staysafe}
                className="mx-auto img-fluid rounded d-none d-lg-block"
                alt="Image"
              />
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 d-col-lg-8 d-col-md-6 d-col-sm-12 p-3">
              <h1 className="display-4 fw-bold lh-1 mb-3">MEDICAL SERVICES</h1>
              <p className="lead">
                This initiative is dedicated to equipping people with
                comprehensive information essential for addressing medical
                emergencies promptly and effectively. Our goal is to empower
                individuals to make informed decisions and access timely
                assistance when it matters most.
              </p>
              <p className="text-muted">
                Serving Hospitality at its best within your Home
              </p>
              <div className="d-md-flex justify-md-content-center">
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a
                    className="btn btn-primary btn-lg me-md-2 mb-3"
                    href="#services"
                    role="button"
                  >
                    View All Services
                  </a>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a
                    className="btn btn-secondary btn-lg me-md-2 mb-3"
                    href="#contact-section"
                    role="button"
                  >
                    Add Contact Information
                  </a>
                </div>
              </div>

              <h1 className="display-4 fw-bold lh-1 mt-5 mb-3">
                Join us in this endeavor!
              </h1>
              <p className="lead">
                Help us to Verify the Contacts that are recieved from the people
                who fill the Information on this website. To do so and
                contribute us, Click on the button below to Join as a volunteer
                from your Home and help people to get the Right Information.
              </p>
              <div className="d-md-flex justify-md-content-center">
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link
                    to="/volunteerpage"
                    className="btn btn-primary btn-lg me-md-2 mb-3"
                    target="_parent"
                    role="button"
                  >
                    Join as a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
