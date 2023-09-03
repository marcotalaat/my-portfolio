import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";
import "./footer.css";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [btnShow, setBtnShow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", function(){
      this.window.scrollY > 200 ? setBtnShow(true) : setBtnShow(false);
    }, [])
  })

  const year = new Date();
  const styleFooter = {
    padding: "1.5rem 0",
    marginTop: "10rem",
    backgroundColor: "#3eb489",
    color: "#FFF",
  };
  return (
    <footer style={styleFooter}>
      <div className="container text-center">
        <h5 className="m-0">
          <span className="me-2">
            <FontAwesomeIcon icon={faCopyright} />
          </span>
          {year.getFullYear()} | All rights reserved
        </h5>
      </div>
      {btnShow &&
      <a href="#landing">
        <span className="btn-top">
          <FontAwesomeIcon icon={faArrowAltCircleUp} />
        </span>
      </a>
      }
    </footer>
  );
};
