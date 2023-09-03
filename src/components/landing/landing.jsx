import React from "react";
import './landing.css';


import { LandInfo } from "./landInfo";
import { LandImg } from "./landImg";

const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="container">
        <div className="row">
          <div className="shapes"></div>
          <div className="col-md-12 col-lg-6">
            <LandInfo />
          
          </div>
          <div className="col-md-12 col-lg-6">
            <LandImg />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Landing;
