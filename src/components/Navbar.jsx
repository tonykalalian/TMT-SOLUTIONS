import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHome,
  faCube,
  faEnvelope,
  faWrench,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faGlobe} /> TMT SOLUTIONS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink to="/" className="nav-link" activeclassname="active">
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
            <NavLink
              to="/product"
              className="nav-link"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faCube} /> Product
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </NavLink>
            <NavLink
              to="/services"
              className="nav-link"
              activeclassname="active"
            >
              <FontAwesomeIcon icon={faWrench} /> Services
            </NavLink>
            <NavLink to="/about" className="nav-link" activeclassname="active">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
