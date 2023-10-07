import React from "react";

export default function Header(props) {
  return (
    <header id="header">
      <div className="container d-flex justify-content-between">
        <div className="logo mr-auto">
          <h1 className="text-light">
            <a href="index.html">Trav</a>
          </h1>
        </div>
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#catalog">Catalog</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li className="get-started">
              <a href="#about">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
