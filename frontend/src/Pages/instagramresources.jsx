import React from 'react';
import Footer from '../components/Footer/Footer';
import PageNavbar from '../components/Navbar/PageNavbar';
import instagramlogo from '../images/instagram-logo.png'

const instagramresources = () => {
  return (
      <div className="instagramresources">
          <PageNavbar/>
          <div className="container py-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center flex-column">
                <p className="display-5 fw-bold">Instagram Resources</p>
                <img src={instagramlogo} alt="Instagram Logo" className="mb-5" width="100" height="100" />
            </div>
            <div className="col">
                <div className="list-group">
                    <a href="https://bit.ly/3eySDwT" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        What to Do if you have COVID-19 ?
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/3uEzf7g" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Donating Plasma
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/33vgzuL" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Steps to Get Vaccinated
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/2SFGqhE" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Recovering from COVID-19 at Home
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/3beh3cX" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        COVID-19 Life Saving Information by Doctor
                        <span className="badge bg-warning text-dark">Video</span>
                    </a>
                    <a href="https://bit.ly/33LtysJ" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Why to take Vaccine ?
                        <span className="badge bg-warning text-dark">Video</span>
                    </a>
                    <a href="https://bit.ly/3tDrCwy" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Caring for Someone in Hospital with COVID-19
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/3vTQT7m" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Donations for Covid Relief
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/3y4djF1" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Verified COVID-19 Resources - Pune, Maharashtra
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/2SFGGgC" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Covid at Home Healing
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/3exMZLE" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Covid Relief Resources - PAN India
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/2Q6ahPg" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Treat Covid at Home
                        <span className="badge bg-primary">Post</span>
                    </a>
                    <a href="https://bit.ly/2QcL7i8" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        What to do if Oxygen Levels Drop ?
                        <span className="badge bg-primary">Post</span>
                    </a>
                    <a href="https://bit.ly/3hh0tgH" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Oxygen Concentrators
                        <span className="badge bg-success">Guide</span>
                    </a>
                    <a href="https://bit.ly/3hkXLGO" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Taking Care of Covid Patient ? Read This
                        <span className="badge bg-primary">Post</span>
                    </a>
                    <a href="https://bit.ly/3o3aTlo" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Websites Helping Covid Patients
                        <span className="badge bg-primary">Post</span>
                    </a>
                    <a href="https://bit.ly/3faMOVA" target="_parent" className="list-group-item list-group-item-action fs-5 border border-danger border-1 rounded mb-2">
                        Caring for your Mental Health during COVID-19
                        <span className="badge bg-success">Guide</span>
                    </a>
                </div>
            </div>
        </div>

          <Footer/>
      </div>
  );
};

export default instagramresources;
