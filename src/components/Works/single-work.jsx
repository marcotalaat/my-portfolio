import React, { useState } from "react";

import { AnimatePresence, motion as m } from "framer-motion";

import Card from "./card";

const Single = ({works}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [currWork, setCurrWork] = useState([]);

  const openedWork = (work) => {
    setIsOpened(true);
    setCurrWork(work);
  };

  const closedOverlay = () => {
    setIsOpened(false);
    setCurrWork([]);
  };

  return (
    <React.Fragment>
      {works.map((work) => (
        <m.div
          className="col-sm-12 col-md-6 col-lg-4 mb-4"
          key={work.id}
          onClick={() => openedWork(work)}
          whileHover={{ scale: 1.05 }}
          data-aos="fade-up"
          data-aos-delay={`${work.id}0`}
        >
          <m.div className="single-work">
            <m.div className="img-wrapper position-relative">
              <img
                src={work.imgCover}
                className="img-fluid"
                alt={work.title}
                loading="lazy"
              />
            </m.div>
          </m.div>
        </m.div>
      ))}

      <AnimatePresence>
        {isOpened && (
          <m.div
            className="overlay container"
            onClick={closedOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 0.1 }}
            exit={{ opacity: 0 }}
          >
            <Card data={currWork} close={closedOverlay} />
          </m.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};
export default Single;
