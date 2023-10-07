import React from "react";
import { Link } from "react-router-dom";
import "../assets/bootstrap/bootstrap.min.css";

export function Unauthorized() {
  return (
    <div className="container text-center mt-5">
      <h1>Unauthorized</h1>
      <h2>401</h2>

      <Link to="/login">
        <button type="button" className="btn btn-primary">
          Login
        </button>
      </Link>
    </div>
  );
}
