import React from "react";
import "./navbar.css";
import logo from "./../../../img/logo/logo-white.png";

import {
  faIdCard,
  faBriefcase,
  faPhone,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { List } from "../list";

const Navbar = () => {
  return (

      <div className="position-relative">
        <nav
          className="text-center"
          data-aos="fade-down"
        >
          <ul>
            <List name={"about"} icon={faIdCard} />
            <List name={"works"} icon={faBriefcase} />
          </ul>
          <span className="logo position-relative">
            <a href="#landing">
              <img src={logo} alt="Logo of Marco Talaat" />
            </a>
          </span>
          <ul>
            <List name={"reviews"} icon={faRankingStar} />
            <List name={"contact"} icon={faPhone} />
          </ul>
        </nav>
      </div>

  );
};
export default Navbar;
