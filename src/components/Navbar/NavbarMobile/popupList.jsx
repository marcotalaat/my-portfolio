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

const Popup = ({ isOpen, closed }) => {
  return (
    <m.div className="popup-mobile" style={{ left: isOpen ? "0" : "-100%" }}>
      <m.ul>
        <m.li onClick={closed} className="close-nav" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </m.li>
        <m.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{delay: .1}}>
          <List name={"about"} icon={faIdCard} />
        </m.div>
        <m.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{delay: .2}}>
          <List name={"works"} icon={faBriefcase} />
        </m.div>
        <m.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{delay: .3}}>
          <List name={"reviews"} icon={faRankingStar} />
        </m.div>
        <m.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{delay: .4}}>
          <List name={"contact"} icon={faPhone} />
        </m.div>
      </m.ul>
    </m.div>
  );
};

export default Popup;
