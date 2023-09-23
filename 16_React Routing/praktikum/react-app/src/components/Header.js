/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../assets/css/style.module.css";

export function Header(props) {
  const { header = "header" } = props;
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className={`${styles["navbar-brand"]} navbar-brand`} href="#">
            {header}
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={props.randomNumber}
                  >
                    Home
                  </button>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">About</a>
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
