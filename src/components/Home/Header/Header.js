import React from "react";
import { Navbar } from "./Navbar/Navbar";

export const Header = () => {
  return (
    <div>
      <Navbar />
      <div
        className="row mt-4"
        style={{ maxWidth: "1200px", marginInline: "auto" }}
      >
        <div className="col-md-6">
          <div className="fs-1 fw-bolder">
            Welcome! <br />
            Here you book your appointment
            <br />
            from your desire doctor
            <br />
            Just Registration, then schedule
            <br />
            your appointment from the doctor list
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};
