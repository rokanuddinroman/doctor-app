import React from "react";
import { Header } from "./Header/Header";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="text-center mt-5">
        <h1>Want to get Appointment</h1>
        <h1 className="mt-5">Follow these steps</h1>
      </div>
      <div className="row" style={{ maxWidth: "1200px", marginInline: "auto" }}>
        <div className="col-md-4 border border-secondary border-4 rounded p-5 ">
          <p className="text-center fw-bold">Room 1</p>
        </div>
        <div className="col-md-4 border border-secondary border-4 rounded p-5 ">
          <p className="text-center fw-bold">Room 1</p>
        </div>
        <div className="col-md-4 border border-secondary border-4 rounded p-5 ">
          <p className="text-center fw-bold">Room 1</p>
        </div>
      </div>
    </div>
  );
};
