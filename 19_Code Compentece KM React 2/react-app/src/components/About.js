import React from "react";
import img from "../assets/img/about-us.jpg";

export default function About(props) {
    return(<section>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div
              className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
              style={{ color: "black" }}
            >
              <h2>About us</h2>
              <p style={{ fontSize: 18, fontWeight: 400 }}>
                Welcome to TRAV, your ultimate destination for all things travel and
                adventure! We are passionate about exploring the world and believe
                that every journey is a story waiting to be told. Our mission at Trav
                is to inspire and empower travelers of all backgrounds to embark on
                unforgettable journeys. We aim to provide you with the tools,
                information, and inspiration you need to plan your dream vacation and
                create lasting memories.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      );
}