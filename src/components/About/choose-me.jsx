import React from "react";
import bkgUrl from "./../../img/about-bkg.png";
import './about.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faCode,
  faStopwatch,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const Choose = () => {
  const background = {
    backgroundImage: `url(${bkgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3eb489"
          fillOpacity="1"
          d="M0,224L120,208C240,192,480,160,720,165.3C960,171,1200,213,1320,234.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <section className="choose" style={background}>
        <div className="container">
          <h1>Why you are choose me?</h1>
          <div className="row mt-5">
            <div className="col-4 col-md-4" data-aos="fade-up" >
              <div className="single-card text-center">
                <span className="icon">
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                <h6>Highly Performance</h6>
              </div>
            </div>

            <div className="col-4 col-md-4" data-aos="fade-up" data-aos-delay="50">
              <div className="single-card text-center">
                <span className="icon">
                  <FontAwesomeIcon icon={faCode} />
                </span>
                <h6>Clean Code</h6>
              </div>
            </div>

            <div className="col-4 col-md-4" data-aos="fade-up" data-aos-delay="70">
              <div className="single-card text-center">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 460 512"
                    fill="#3eb489"
                  >
                    <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
                  </svg>
                </span>
                <h6>SEO Optimized</h6>
              </div>
            </div>
          </div>

          <div className="row mt-5" style={{ justifyContent: "center" }}>
            <div className="col-4 col-md-4" data-aos="fade-up" data-aos-delay="90">
              <div className="single-card text-center">
                <span className="icon">
                  <FontAwesomeIcon icon={faStopwatch} />
                </span>
                <h6>On Time</h6>
              </div>
            </div>

            <div className="col-4 col-md-4" data-aos="fade-up" data-aos-delay="110">
              <div className="single-card text-center">
                <span className="icon">
                  <FontAwesomeIcon icon={faMoneyBill} />
                </span>
                <h6>On Budget</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ transform: "rotate(180deg)", marginTop: "-20px" }}
      >
        <path
          fill="#3eb489"
          fillOpacity="1"
          d="M0,224L120,208C240,192,480,160,720,165.3C960,171,1200,213,1320,234.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};
export default Choose;
