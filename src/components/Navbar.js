import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4 py-3">
      <div className="container-fluid">

        <Link className="navbar-brand brand-logo" to="/">
          GOFOOD
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-items-center gap-3"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center gap-3">

            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link login-btn" to="/login">
                Login
              </Link>
            </li>

          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search food..."
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>

        </div>

      </div>
    </nav>
  );
}