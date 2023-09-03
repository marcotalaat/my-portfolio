import React from "react";
import dotted from "./../../img/dotted.png";

import './about.css';

import {motion as m} from 'framer-motion';

const About = () => {

  const variant = {
    hidden: {x: -500},
    visible: {x: 0},
  }
  const variantReverse = {
    hidden: {x: 500},
    visible: {x: 0},
  }


  return (
    <m.section className="about" id="about" >
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
            transition={{duration: .8}}
          ></m.span>

          <m.div className="default first" style={{ backgroundColor: "#FFF" }}>
            <m.p initial="hidden" animate="visible" variants={variant}>
              I'm Marco Talaat, 23 years old from Egypt. WordPress Developer
              with +3 years of functional experience designing and managing
              business websites using WordPress creation tools.
            </m.p>
          </m.div>

          <m.div
            className="default second"
            style={{ backgroundColor: "#FFF" }}
          >
            <m.p initial="hidden" animate="visible" variants={variantReverse}>
              Skilled in front-end and back-end development and implementing
              themes and plugins. Successfully creates attractive and
              user-friendly websites to meet client expectations in agile
              environments
            </m.p>
          </m.div>

          <m.div className="default third" style={{ backgroundColor: "#FFF" }}>
            <m.p initial="hidden" animate="visible" variants={variant}>
              Built WordPress functions, creating custom post types and
              developing widgets to conform with Wordpress coding standards.
              Over +4 years of programming, javascript and ajax experience.
            </m.p>
          </m.div>
        </m.div>
        <span className="about-dotted-right" data-aos="fade-left">
          <img src={dotted} alt="dotted shape"  />
        </span>
      </m.div>
    </m.section>
  );
};
export default About;
