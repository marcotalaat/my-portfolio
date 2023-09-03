import React, { useState } from "react";
import { motion as m, useDragControls } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faCircleXmark,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Card = ({ data, close }) => {
  const [height, setHeight] = useState(0);
  const [hiddenDrag, setHiddenDrag] = useState("");
  const controls = useDragControls();

  const defaultAnimation = {
    initial: { x: "100%" },
    whileInView: { x: 0 },
    transition: { type: 0.3 },
    exit: { x: "100%" },
  };

  const imgHeight = (height) => {
    setHeight(height);
  };

  const dragHandler = () => {
    setHiddenDrag("none");
  };

  const axiosLink = "https://64f03e748a8b66ecf77955b1.mockapi.io/views/";
  const countViews = async (title) => {
    const { data } = await axios.get(axiosLink);
    for (const d of data) {
      if (d.title.toLowerCase() === title.toLowerCase()) {
        const clone = { id: d.id, title: d.title, counter: d.counter + 1 };
        await axios.put(axiosLink + d.id, clone);
      }
    }
  };

  return (
    <m.div className="card" onClick={(e) => e.stopPropagation()}>
      <m.div className="row position-relative">
        <m.div className="col-md-12 col-lg-6">
          <span className="close-card" onClick={close}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </span>
          <m.div
            className="card-img position-relative"
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ type: 0.3 }}
            exit={{ y: "-100%" }}
          >
            <m.img
              onHoverStart={(e) => imgHeight(e.target.offsetHeight)}
              src={data.imgFull}
              alt={data.title}
              className="img-fluid"
              drag="y"
              dragControls={controls}
              dragConstraints={{ bottom: 100, top: -(height - 300) }}
              whileTap={{ cursor: "grabbing" }}
            />
            <m.div
              className="drag-to-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transitionEnd: { display: "none" } }}
              transition={{ type: "spring", delay: 0.2 }}
              onClick={dragHandler}
              style={{ display: hiddenDrag }}
            >
              <m.div className="text-center">
                <m.span className="drag-icon">
                  <FontAwesomeIcon icon={faHand} />
                </m.span>
                <m.p>Drag to scroll</m.p>
              </m.div>
            </m.div>
          </m.div>
        </m.div>

        <m.div className="col-md-12 col-lg-6">
          <m.div className="card-details">
            <m.h2
              initial={defaultAnimation.initial}
              whileInView={defaultAnimation.whileInView}
              transition={defaultAnimation.transition}
              exit={defaultAnimation.exit}
            >
              <m.a href={data.url} target="_blank">
                {data.title}
              </m.a>
            </m.h2>
            <m.p
              initial={defaultAnimation.initial}
              whileInView={defaultAnimation.whileInView}
              transition={defaultAnimation.transition}
              exit={defaultAnimation.exit}
            >
              {data.description}
            </m.p>

            <m.div
              initial={defaultAnimation.initial}
              whileInView={defaultAnimation.whileInView}
              transition={defaultAnimation.transition}
              exit={defaultAnimation.exit}
            >
              <m.a
                href={data.url}
                target="_blank"
                onClick={() => countViews(data.title)}
              >
                <m.h4>
                  Show
                  <m.span>
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </m.span>
                </m.h4>
              </m.a>
            </m.div>
          </m.div>
        </m.div>
      </m.div>
    </m.div>
  );
};
export default Card;
