import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion as m } from "framer-motion";

export const List = ({ name, icon }) => {
  return (
    <m.a href={`#${name}`}>
      <m.li>
        <FontAwesomeIcon icon={icon} />
      </m.li>
    </m.a>
  );
};
