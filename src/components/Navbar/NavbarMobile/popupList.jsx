import React from "react";
import "./navMobile.css";
import { List } from "../list";
import {
  faTimesCircle,
  faIdCard,
  faBriefcase,
  faPhone,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion as m } from "framer-motion";
import menuBkg from './../../../img/menu-bkg.png'

const Popup = ({ isOpen, closed }) => {
  const style = {
    backgroundImage: `url(${menuBkg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    left: isOpen ? "0" : "-100%"
  }
  return (
    <m.div className="popup-mobile" style={style}>
      <m.ul>
        <m.li
          onClick={closed}
          className="close-nav"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </m.li>
        <m.span
          className="position-relative"
          style={{
            left: isOpen ? "0" : "-100%",
            transition: "all .1s .5s ease",
          }}
        >
          <List name={"about"} icon={faIdCard} />
        </m.span>

        <m.span
          className="position-relative"
          style={{
            left: isOpen ? "0" : "-100%",
            transition: "all .1s .6s ease",
          }}
        >
          <List name={"works"} icon={faBriefcase} />
          </m.span>
          <m.span
          className="position-relative"
          style={{
            left: isOpen ? "0" : "-100%",
            transition: "all .1s .7s ease",
          }}
        >
          <List name={"reviews"} icon={faRankingStar} />
          </m.span>
        <m.span
          className="position-relative"
          style={{
            left: isOpen ? "0" : "-100%",
            transition: "all .1s .8s ease",
          }}
        >
          <List name={"contact"} icon={faPhone} />
          </m.span>
      </m.ul>
    </m.div>
  );
};

export default Popup;
