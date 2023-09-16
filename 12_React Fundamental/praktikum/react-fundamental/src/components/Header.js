/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export class Header extends React.Component {
    render () {
        const {header} = this.props;
        return <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
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
                    <button type="button" className="btn btn-primary">
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
              </ul>
            </div>
          </div>
        </nav>
      </header>
    }
}

Header.defaultProps = {
    header: "header"
}