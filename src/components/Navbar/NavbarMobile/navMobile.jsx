import React from "react";
import "./navMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../../img/logo/logo-colored.png";
import Popup from "./popupList";
import { useState } from "react";

const NavMobile = () => {
    const [isClosePopup, setIsClodepopup] = useState(false);

    const closePopup = () => {
        return setIsClodepopup(false)
    }
  return (
    <div className="nav-mobile">
      <div className="container">
        <div className="nav-mobile-wrapper text-center">
        <div className="icon d-inline float-start" onClick={() => setIsClodepopup(true)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo position-relative d-inline">
                <a href="#landing">
                  <img src={logo} alt="Logo of Marco Talaat" />
                </a>
              </div>
        </div>
      </div>
      <Popup isOpen={isClosePopup} closed={closePopup} />
    </div>
  );
};
export default NavMobile;
