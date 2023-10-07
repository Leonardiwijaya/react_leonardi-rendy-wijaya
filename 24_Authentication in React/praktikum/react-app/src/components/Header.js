/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../assets/css/style.module.css";
import {Link} from "react-router-dom";
import auth from "../utils/auth";

export function Header(props) {
  const { header = "header" } = props;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <Link to='/' className={`${styles["navbar-brand"]} navbar-brand`}>
            {header}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  <button
                    type="button"
                    className="btn btn-primary"
                  >
                    Home
                  </button>
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                    <button onClick={auth.logout} type="button" className="btn btn-primary">
                      Logout
                    </button>
                </li>
              {props.language && (
                <li>
                  <button
                    type="button"
                    className="btn btn-primary m-2"
                    onClick={props.changeLanguage}
                  >
                    {props.language}
                  </button>
                </li>
              )}
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
