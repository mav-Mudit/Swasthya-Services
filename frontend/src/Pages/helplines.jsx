import React from "react";
import Footer from "../components/Footer/Footer";
import PageNavbar from "../components/Navbar/PageNavbar";

const helplines = () => {
  return (
    <div className="websiteslist">
      <PageNavbar />
      <div className="container py-5">
        <p className="display-6 fw-bold mx-auto text-center pb-3">
          Indian Helpline Numbers
        </p>

        <div className="row d-flex justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">
            <table className="table table-hover table-bordered border-secondary">
              <thead
                className="table text-white"
                style={{ backgroundColor: "#650013" }}
              >
                <th className="lead fs-4 p-2 px-5">Name</th>
                <th className="lead fs-4 p-2 px-5">Number</th>
              </thead>
              <tbody>
                <tr className="fs-5">
                  <td>NATIONAL EMERGENCY NUMBER </td>
                  <td>112</td>
                </tr>
                <tr className="fs-5">
                  <td>AMBULANCE </td>
                  <td>102</td>
                </tr>
                <tr className="fs-5">
                  <td>
                    Medical Helpline in Andhra Pradesh,
                    Gujarat,Uttarakhand,Goa,Tamil
                    Nadu,Rajasthan,Karnataka,Assam,Meghalaya, M.P and U.P
                  </td>
                  <td>108</td>
                </tr>
                <tr className="fs-5">
                  <td>Air Ambulance</td>
                  <td>+91 9540161344</td>
                </tr>
                <tr className="fs-5">
                  <td>ORBO Centre, AIIMS (For Donation Of Organ) Delhi </td>
                  <td>1060</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default helplines;
