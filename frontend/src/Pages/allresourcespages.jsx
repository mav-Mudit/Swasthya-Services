import React from "react";
import PageNavbar from "../components/Navbar/PageNavbar";
import ResourcesCard from "../components/ResourceCard/ResourcesCard";
import Footer from "../components/Footer/Footer";
import WHO from "../images/Who.jpeg";
import life from "../images/life-logo.PNG";
import blood from "../images/Blood_Banks.jpg";
import mental from "../images/Mental.jpeg";
import doctor from "../images/Doctor.jpeg";
import ambulance from "../images/ambulance.jpeg";

const allresourcespages = () => {
  return (
    <div className="allresourcespages">
      <PageNavbar />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">
        <ResourcesCard
          image={WHO}
          heading={"World Health Organization"}
          link={"https://www.instagram.com/who/"}
        />
        <ResourcesCard
          image={WHO}
          heading={"Instagram Resources by WHO"}
          link={"https://www.instagram.com/who/"}
        />
        <ResourcesCard
          image={life}
          heading={" Verified Crowd Sourced Emergency Services Directory"}
          link={"https://life.coronasafe.network/"}
        />
        <ResourcesCard
          image={blood}
          heading={"Blood-Banks"}
          link={"https://indianhelpline.com/blood-banks"}
        />
        <ResourcesCard
          image={mental}
          heading={"Mental Health Helpline"}
          link={"https://indianhelpline.com/suicide-helpline"}
        />
        <ResourcesCard
          image={doctor}
          heading={"Doctor Consultations Online"}
          link={"https://indianhelpline.com/doctor"}
        />
        <ResourcesCard
          image={ambulance}
          heading={"AMBULANCE HELPLINE"}
          link={"https://indianhelpline.com/ambulance-helpline"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default allresourcespages;
