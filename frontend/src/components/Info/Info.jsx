import React from "react";
import InfoCard from "./InfoCard";
import InfoCardLeft from "./InfoCardLeft";

import service1 from "./service-1.jpg";
import service2 from "./service-2.jpg";
import service3 from "./service-3.jpg";
import service4 from "./service-4.jpeg";
import service5 from "./service-5.jpg";

const Info = () => {
  return (
    <div className="info">
      <InfoCard
        title="Donate Plasma"
        content="If you're considering donating plasma or have connections who could, click the button below. We'll promptly contact the provided information and work to verify it swiftly. Your contribution can make a significant impact, potentially saving lives in need."
        btninfo="Add a Plasma Donor Contact"
        image={service1}
        link="/plasmadonorcontact"
      />
      <InfoCardLeft
        title="Hospital Beds"
        content="If you're aware of a hospital with available beds or have reliable information, please click the button below. We'll reach out to the provided contact and make efforts to verify the details promptly."
        btninfo="Add a Hospital Contact"
        image={service2}
        link="/hospitalbedcontact"
      />
      <InfoCard
        title=" Oxygen Suppliers"
        content="If you have access to oxygen supply or know someone who does, please input the relevant information and click the button below. We'll reach out to the provided contact and strive to verify the details promptly. Your assistance can make a real difference in providing crucial support to those in need."
        btninfo=" Add a Oxygen Supplier Contact"
        image={service3}
        link="/oxygensupplycontact"
      />
      <InfoCardLeft
        title=" Meds/Injection Suppliers"
        content=" If you're able to provide medications or know someone who can supply meds or injections to those in need, please provide the necessary information and click the button below. We'll contact the provided contact details and work to verify them promptly. Your help can greatly assist in ensuring access to vital medical supplies for those who require them."
        btninfo=" Add a Meds/Injection Contact"
        image={service4}
        link="/medssupplycontact"
      />
      <InfoCard
        title=" Ambulance Service Providers"
        content=" If you're able to organize an ambulance or know someone who provides ambulance services to those in need, please provide the necessary information and click the button below. We'll reach out to the provided contact and make efforts to verify the details promptly. Your assistance can be instrumental in ensuring timely transportation for those requiring urgent medical care."
        btninfo="Add a Ambulance Provider Contact"
        image={service5}
        link="/ambulanceprovidercontact"
      />
    </div>
  );
};

export default Info;
