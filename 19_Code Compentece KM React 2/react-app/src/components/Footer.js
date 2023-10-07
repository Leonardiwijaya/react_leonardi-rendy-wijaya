/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer(props) {
  return (
    <footer className="text-center text-lg-start text-white">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        {/* Section: Links */}
        <section className="">
          {/*Grid row*/}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h3 className="text-uppercase mb-4 font-weight-bold">Trav</h3>
              <h5>
                Your new travel experience with Trav. We will make your travel
                experience great
              </h5>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a className="text-white">About Us</a>
              </p>
              <p>
                <a className="text-white">Services</a>
              </p>
              <p>
                <a className="text-white">Team</a>
              </p>
              <p>
                <a className="text-white">Contact Us</a>
              </p>
            </div>
            {/* Grid column */}
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fas fa-home mr-3" /> Medan, Sumatera Utara
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> wijayaleonardi5@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> 0823 6697 1420
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/*Grid row*/}
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2023 Copyright:
                <a className="text-white">Trav</a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-google" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
