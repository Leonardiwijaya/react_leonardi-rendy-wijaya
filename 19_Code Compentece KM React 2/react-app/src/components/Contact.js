import React from "react";
import img from "../assets/img/contact-us.jpg";

export default function Contact(props) {
    const alertData = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        let data = {
            first: null,
            last: null,
            email: null,
            message: null,
        };

        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        let text = `First Name: ${data["first"]}\nLast Name: ${data["last"]}\nEmail: ${data["email"]}\nMessage: ${data["message"]}\n\n`
        alert(text);
    };
  return (
    <section>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={img} className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2"
            style={{ color: "#434343" }}
          >
            <h2>Contact Us</h2>
            <form style={{ border: "1px solid block"}} onSubmit={alertData}>
              <div className="form-group pb-2">
                <label htmlFor="firstname">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="First name"
                  name="first"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="lastname">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last name"
                  name="last"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="message">What can we help you with?</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                  defaultValue={""}
                  name="message"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary mt-2"
                style={{ backgroundColor: "#85E6C5", border: "none" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
