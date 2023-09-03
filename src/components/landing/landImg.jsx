import React from 'react';
import img from "./../../img/marco-no-bkg.png";
import { motion as m } from "framer-motion";

export const LandImg = () => {
  const initial = {
    opacity: 0
  }
  const animate = {
    opacity: 1
  }
  return (
    <div className="land-img position-relative">
    <m.img src={img} alt="Marco Talaat" loading="lazy" initial={initial} animate={animate} transition={{type: "tween"}} />
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#FFFFFF"
        d="M54.3,-52C69.3,-39.3,79.6,-19.6,79.2,-0.4C78.9,18.9,67.9,37.9,52.9,53.7C37.9,69.5,18.9,82.2,0.5,81.7C-17.9,81.2,-35.8,67.5,-50.6,51.7C-65.4,35.8,-77.1,17.9,-79.4,-2.3C-81.7,-22.5,-74.7,-45.1,-59.9,-57.8C-45.1,-70.4,-22.5,-73.2,-1.5,-71.8C19.6,-70.3,39.3,-64.6,54.3,-52Z"
        transform="translate(100 100)"
      />
    </svg>
  </div>
  );
};