import React from "react";
import "./about.css";
import dotted from "./../../img/dotted.png";
import { aboutData } from "./aboutData";
import {motion as m} from 'framer-motion';

const AboutMobile = () => {

  return (
    <m.section className="about mobile" id="about" >
      <m.div className="container position-relative">
        <h1>About Me</h1>
        <span className="about-dotted-left" data-aos="fade-right">
          <img src={dotted} alt="dotted shape"  />
        </span>
        <m.div className="mid-line">
          <m.span
            className="mid-line-progress"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.8 }}
          ></m.span>

          {aboutData.map((about) => (
            <m.div
              className="mobile-each"
              key={about.id}
              style={{ backgroundColor: "#FFF" }}
            >
              <m.p
                data-aos="fade-left"
                data-aos-delay={`${about.id}0`}
              >
                {about.content}
              </m.p>
            </m.div>
          ))}
        </m.div>
        <span className="about-dotted-right" data-aos="fade-left">
          <img src={dotted} alt="dotted shape"  />
        </span>
      </m.div>
    </m.section>
  );
};
export default AboutMobile;
