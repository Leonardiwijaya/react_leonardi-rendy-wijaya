import React from "react";
import img from "../assets/img/hero-img.png";

export default function Banner(props) {
  return (
    <section
      id="hero"
      className="pt-5 pb-2"
      style={{ border: "1px solid white" }}
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1">
            <h1>Your new travel experience with Trav</h1>
            <h2>We will make your travel experience great</h2>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
