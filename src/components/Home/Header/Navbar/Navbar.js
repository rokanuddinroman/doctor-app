import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fw-bold">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              style={{ width: "100px" }}
              src="https://png.pngtree.com/png-clipart/20221221/original/pngtree-doctor-logo-png-image_8789798.png"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/doctor-appointment" class="nav-link active">
                  Doctor Appointment
                </Link>
              </li>
              <li class="nav-item">
                <Link to="registration" class="nav-link active">
                  Registration
                </Link>
              </li>
              <li class="nav-item">
                <Link to="my-appointments" class="nav-link active">
                  My Appointments
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
