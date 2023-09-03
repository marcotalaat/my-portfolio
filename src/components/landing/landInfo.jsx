import React from 'react'
import cv from "./../../img/My_CV_New.pdf";
import { motion as m } from "framer-motion";
import axios from "axios";
export const LandInfo = () => {
  const initial = {
    y: 200,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };

  const link = "https://64f03e748a8b66ecf77955b1.mockapi.io/views/";

    const cvIncrement = async() => {

      const { data } = await axios.get(link);

      for(const d of data){
        if(d.title === "cv"){
          const clone = {id: d.id, title: d.title, counter: d.counter + 1};
          axios.put(link + d.id, clone)
        }
      }

    };



  return (
    <m.div className="land-details">
      <m.h3 initial={initial} animate={animate} transition={{ type: "tween" }}>
        Hi,
      </m.h3>
      <m.h1
        initial={initial}
        animate={animate}
        transition={{ type: "tween", delay: 0.2 }}
      >
        I'm Marco Talaat
      </m.h1>
      <m.h3
        initial={initial}
        animate={animate}
        transition={{ type: "tween", delay: 0.3 }}
      >
        PHP - WordPress Developer
      </m.h3>
      <m.div className="mt-5">
        <m.a
          href="#works"
          className="btn-about-me"
          initial={initial}
          animate={animate}
          transition={{ type: "tween", delay: 0.4 }}
        >
          My Works
        </m.a>
        <m.a
          href={cv}
          download
          className="btn-cv"
          initial={initial}
          animate={animate}
          transition={{ type: "tween", delay: 0.5 }}
          whileTap={{ scale: 0.3 }}
          onClick={cvIncrement}
        >
          Download My CV
        </m.a>
      </m.div>
    </m.div>
  );
};
